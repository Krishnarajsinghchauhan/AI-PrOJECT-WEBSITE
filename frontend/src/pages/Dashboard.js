import { useEffect, useState } from "react";
import { getTasks, createTask, getInsights } from "../api/api";

function Dashboard({ token }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [insight, setInsight] = useState("");

  const loadTasks = async () => {
    const res = await getTasks(token);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;

    await createTask(token, { title });

    setTitle("");

    loadTasks();
  };

  const loadInsights = async () => {
    const res = await getInsights(token);
    setInsight(res.data.insight);
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">AI Task Manager</h1>
        <p className="text-sm opacity-80">Manage your work with AI insights</p>
      </div>

      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-4">Tasks</h2>

          <div className="flex gap-2 mb-4">
            <input
              placeholder="Enter task..."
              value={title}
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={addTask}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 active:scale-95 transition"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {tasks.map((t) => (
              <li
                key={t.id}
                className="p-3 bg-gray-50 rounded-lg border hover:bg-indigo-50 transition"
              >
                {t.title}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-4">AI Insights</h2>

          <button
            onClick={loadInsights}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 active:scale-95 transition mb-4"
          >
            Generate Insights
          </button>

          <div className="bg-gray-50 p-4 rounded-lg min-h-[120px] border">
            <p className="text-gray-700">
              {insight || "AI insights will appear here..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
