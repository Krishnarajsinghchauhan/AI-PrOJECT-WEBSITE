from flask import Flask
from config import Config
from models import db
from flask_cors import CORS # type: ignore

from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity

from routes.auth_routes import auth_bp
from routes.task_routes import task_bp

from models.user_model import User
from models.task_model import Task


jwt = JWTManager()

def create_app():

    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app, origins=["http://localhost:3000"])

    db.init_app(app)

    jwt.init_app(app)

    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(task_bp)

    with app.app_context():
        db.create_all()

    return app


app = create_app()


@app.route("/test")
def test():
    return "working"


@app.route("/protected")
@jwt_required()
def protected():

    user_id = get_jwt_identity()

    return {
        "message": "Access granted",
        "user_id": user_id
    }


if __name__ == "__main__":
    app.run(debug=True)