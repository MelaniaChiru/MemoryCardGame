'''
	Routes for the level module.
'''
import requests
from flask import url_for
from model import Level

from flask import render_template
from . import level_bp

@level_bp.route('/')
def levels():
	# ''' renders the level selection menu page '''
	api_url = url_for('api_bp.all_levels', _external=True)
	response = requests.get(api_url)
	levels_data = response.json()
	levels = [Level(**level_dict) for level_dict in levels_data]
	return render_template('levels.html', levels = levels)

@level_bp.route('/<int:level>')
def level(level):
	''' renders page for a specific level '''
	return render_template('level.html', level=level)
