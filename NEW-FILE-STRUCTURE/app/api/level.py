from api import api
from model import Level

@api.route('levels/all', methods=['GET'])
def all_levels():
    return text_to_level_object()

def text_to_level_object():
    levels = []
    content = read_from_file()
    for obj in content:
        info = obj.split(",")
        levels.append(Level(**info))
    return levels

import csv
def read_from_file():
    file = open("info_levels.txt", "r")
    content = file.read()
    file.close()
    return content
