import os
import requests

HF_API_URL = "https://router.huggingface.co/v1/chat/completions"

HF_TOKEN = os.getenv("HF_API_KEY")

print("HF TOKEN:", HF_TOKEN)

def enhance_with_ai(text):

    headers = {
        "Authorization": f"Bearer {HF_TOKEN}",
        "Content-Type": "application/json"
    }

    payload = {
    "model": "openai/gpt-oss-120b:fastest",
    "messages": [
        {
            "role": "system",
            "content": "You are a productivity assistant."
        },
        {
            "role": "user",
            "content": f"Improve this productivity advice: {text}"
        }
    ],
    "max_tokens": 150
}

    try:

        print("Calling HuggingFace API...")

        response = requests.post(
            HF_API_URL,
            headers=headers,
            json=payload,
            timeout=30
        )

        print("STATUS:", response.status_code)
        print("RAW RESPONSE:", response.text)

        if not response.text:
            return text

        data = response.json()

        print("HF RESPONSE:", data)

        if "choices" in data:
            return data["choices"][0]["message"]["content"]

        return text

    except Exception as e:
        print("AI ERROR:", e)
        return text


def generate_task_insights(tasks):

    if not tasks:
        base_insight = "You currently have no tasks. Great time to plan new work."
    else:

        total = len(tasks)
        pending = [t for t in tasks if t.status == "pending"]

        base_insight = f"You have {total} tasks. {len(pending)} tasks are pending."

    try:
        return enhance_with_ai(base_insight)
    except Exception:
        return base_insight