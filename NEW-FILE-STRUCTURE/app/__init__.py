from flask import Flask
from app.main import routes as main_routes
from app.level import routes as level_routes

def create_app():
    app = Flask(__name__)

    # Register the blueprints
    app.register_blueprint(main_routes.main)
    app.register_blueprint(level_routes.level_bp)
    return app