from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.task_service import get_task_insights

from services.task_service import (
    create_new_task,
    get_user_tasks,
    update_existing_task,
    delete_existing_task
)

task_bp = Blueprint("tasks", __name__)


@task_bp.route("/tasks", methods=["POST"])
@jwt_required()
def create_task():

    user_id = get_jwt_identity()

    data = request.json

    title = data.get("title")
    description = data.get("description")

    task = create_new_task(user_id, title, description)

    return jsonify({
        "id": task.id,
        "title": task.title,
        "description": task.description
    })


@task_bp.route("/tasks", methods=["GET"])
@jwt_required()
def get_tasks():

    user_id = get_jwt_identity()

    tasks = get_user_tasks(user_id)

    return jsonify([
        {
            "id": task.id,
            "title": task.title,
            "description": task.description
        }
        for task in tasks
    ])


@task_bp.route("/tasks/<int:task_id>", methods=["PUT"])
@jwt_required()
def update_task(task_id):

    data = request.json

    title = data.get("title")
    description = data.get("description")

    task = update_existing_task(task_id, title, description)

    if not task:
        return {"error": "Task not found"}, 404

    return {"message": "Task updated"}


@task_bp.route("/tasks/<int:task_id>", methods=["DELETE"])
@jwt_required()
def delete_task(task_id):

    deleted = delete_existing_task(task_id)

    if not deleted:
        return {"error": "Task not found"}, 404

    return {"message": "Task deleted"}


@task_bp.route("/tasks/insights", methods=["GET"])
@jwt_required()
def task_insights():

    user_id = get_jwt_identity()

    insights = get_task_insights(user_id)

    return {
        "insight": insights
    }