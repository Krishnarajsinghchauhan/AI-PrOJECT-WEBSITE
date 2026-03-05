from models import db
from models.task_model import Task


def create_task(task):

    db.session.add(task)
    db.session.commit()

    return task


def get_tasks_by_user(user_id):

    return Task.query.filter_by(user_id=user_id).all()


def get_task(task_id):

    return Task.query.get(task_id)


def delete_task(task):

    db.session.delete(task)
    db.session.commit()


def update_task():

    db.session.commit()