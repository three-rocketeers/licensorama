from app import app
from app.models import License
from flask import jsonify


@app.route('/api/licenses')
def get_license():
    licenses = License.query.all()
    return jsonify([lic.serialize() for lic in licenses])