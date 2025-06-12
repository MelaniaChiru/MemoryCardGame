from api import api
from model import Level
from flask import jsonify

@api.route('levels', methods=['GET'])
def all_levels():
    return jsonify(read_from_file())

import json
def read_from_file():
    content =""
    with open("info_levels.csv", mode = 'r') as file:
        csvFile = csv.reader(file)
        for lines in csvFile:
            content += ",".join(lines) + "\n"
    return content
