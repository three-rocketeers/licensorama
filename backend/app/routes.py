from app import app
from app.models import License
from flask import jsonify

def serialize_list(input_list):
    return [elem.serialize() for elem in input_list]


@app.route('/api/licenses')
def get_license():
    licenses = License.query.all()
    return jsonify(serialize_list(licenses))
