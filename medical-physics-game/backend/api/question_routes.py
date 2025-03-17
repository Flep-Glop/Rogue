"""
@system QuestionSystem
@component QuestionRoutes
@description API endpoints for question retrieval and answering
@dependencies ../data/models/question.py, ../data/repositories/question_repo.py
@routes /api/questions/*
@author Your Name
@lastModified 2025-03-17
"""

from flask import jsonify, request
from backend.api.routes import api_bp
from backend.data.repositories.question_repo import get_all_questions, get_question_by_id

@api_bp.route('/questions', methods=['GET'])
def get_questions():
    questions = get_all_questions()
    # Convert Question objects to dictionaries for JSON serialization
    question_dicts = [question.to_dict() for question in questions]
    return jsonify(question_dicts)

@api_bp.route('/questions/<question_id>', methods=['GET'])
def get_question(question_id):
    question = get_question_by_id(question_id)
    if question:
        # Convert Question object to dictionary
        return jsonify(question.to_dict())
    return jsonify({"error": "Question not found"}), 404
