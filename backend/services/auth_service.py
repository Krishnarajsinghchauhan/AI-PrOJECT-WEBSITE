from models import db
from models.user_model import User

from utils.security import hash_password, verify_password


def register_user(email, password):

    user = User(
        email=email,
        password_hash=hash_password(password)
    )

    db.session.add(user)
    db.session.commit()

    return user


def authenticate_user(email, password):

    user = User.query.filter_by(email=email).first()

    if not user:
        return None

    if not verify_password(password, user.password_hash):
        return None

    return user