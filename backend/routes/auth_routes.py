from flask import Blueprint, request, jsonify

from flask_jwt_extended import create_access_token

from services.auth_service import register_user, authenticate_user

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/register", methods=["POST"])
def register():

    print("REGISTER API CALLED")

    data = request.json

    email = data.get("email")
    password = data.get("password")

    user = register_user(email, password)

    return jsonify({
        "message": "user created",
        "user_id": user.id
    })


@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data.get("email")
    password = data.get("password")

    user = authenticate_user(email, password)

    if not user:
        return jsonify({"error": "invalid credentials"}), 401

    token = create_access_token(identity=str(user.id))


    return jsonify({
        "access_token": token
    })