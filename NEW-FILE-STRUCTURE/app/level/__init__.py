from flask import Blueprint

level_bp = Blueprint('level_bp', __name__, template_folder='templates', static_folder='static', url_prefix='/levels')

from . import routes