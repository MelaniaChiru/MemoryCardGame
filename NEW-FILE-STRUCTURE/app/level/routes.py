'''
	Routes for the level module.
'''

from flask import render_template
from . import level_bp

@level_bp.route('/')
def levels():
	# ''' renders the level selection menu page '''
	return render_template('levels.html')

@level_bp.route('/<int:level_id>')
def level(level_id=None):
	''' renders page for a specific level '''
	return render_template('level.html', level_id=level_id)
