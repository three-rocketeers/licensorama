from app import app,models


@app.route('/')
def get_license():
    return models.License.query.get(1).licensekey