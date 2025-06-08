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
    content =""
    with open("info_levels.csv", mode = 'r') as file:
        csvFile = csv.reader(file)
        for lines in csvFile:
            content += ",".join(lines) + "\n"
    return content
