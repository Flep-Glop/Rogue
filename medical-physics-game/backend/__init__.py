"""
@system Core
@component BackendInit
@description Initializes the backend Python module
@dependencies flask
@author Your Name
@lastModified 2025-03-17
"""

# Import necessary components to make them available
from flask import Flask

# Create the application instance
app = Flask(__name__, 
            static_folder='../frontend/static',
            template_folder='../frontend/templates')

# Import routes after app creation to avoid circular imports
from backend.api import character_routes, skill_tree_routes, question_routes

# Register blueprints
app.register_blueprint(character_routes.character_routes)
app.register_blueprint(skill_tree_routes.skill_tree_routes)
app.register_blueprint(question_routes.question_routes)

# Initialize state management
from backend.core import state_manager
state_manager.init_app(app)