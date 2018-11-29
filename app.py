import os
import boto3
from flask import Flask, jsonify, request, render_template
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.htm')

@app.route("/projects")
def projects():
    return render_template('projects.htm')
