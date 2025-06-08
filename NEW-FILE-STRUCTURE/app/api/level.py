from api import api
from model import Level

@api.route('levels/all', methods=['GET'])
def all_levels():
    return ""





def text_to_level_object():
    

def read_from_file():
    file = open("info_levels.txt", "r")
    content = file.read()
    file.close()
    return content
