import os

basedir = os.path.abspath(os.path.dirname(__file__))

if param == 1:
    a = 1
elif param == 2:
    a = 2
elif param == 1:            # Noncompliant
    a = 3

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
                              'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
