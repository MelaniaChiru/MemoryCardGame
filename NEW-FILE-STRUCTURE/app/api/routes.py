from . import api_bp
from model import Level
from flask import jsonify

@api_bp.route('levels', methods=['GET'])
def all_levels():
    return jsonify(read_from_file())

@api_bp.route('levels/<int:level_num>', methods=['GET'])
def level_by_num(level_num):
    
    
    return ""

import json
def read_from_file():
    with open('info_level.json', 'r') as file:
        data = json.load(file)
        return data
