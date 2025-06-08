'''
	Routes for the main components of the application application.
'''

from flask import render_template
from . import main_bp

@main_bp.route('/')
@main_bp.route('/home')
def home():
    ''' renders the home page '''
    return render_template('home.html')
