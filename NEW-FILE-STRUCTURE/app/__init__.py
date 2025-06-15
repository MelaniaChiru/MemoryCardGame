from flask import Flask
from app.main import routes as main_routes
from app.level import routes as level_routes
from app.api import routes as api_routes

def create_app():
    app = Flask(__name__)

    # Register the blueprints
    app.register_blueprint(main_routes.main_bp)
    app.register_blueprint(level_routes.level_bp)
    app.register_blueprint(api_routes.api_bp)
    return app