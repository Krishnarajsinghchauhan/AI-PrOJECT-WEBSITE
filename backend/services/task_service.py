from models.task_model import Task
from ai.insights_engine import generate_task_insights

from repositories.task_repository import (
    create_task,
    get_tasks_by_user,
    get_task,
    delete_task,
    update_task
)


def create_new_task(user_id, title, description):

    task = Task(
        title=title,
        description=description,
        user_id=user_id
    )

    return create_task(task)


def get_user_tasks(user_id):

    return get_tasks_by_user(user_id)


def update_existing_task(task_id, title, description):

    task = get_task(task_id)

    if not task:
        return None

    task.title = title
    task.description = description

    update_task()

    return task


def delete_existing_task(task_id):

    task = get_task(task_id)

    if not task:
        return False

    delete_task(task)

    return True




def get_task_insights(user_id):

    tasks = get_tasks_by_user(user_id)

    return generate_task_insights(tasks)