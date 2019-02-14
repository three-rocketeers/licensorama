import os

basedir = os.path.abspath(os.path.dirname(__file__))

b = 2

if b == 1:
    a = 1
elif b == 2:
    a = 2
elif b == 1:            # Noncompliant
    a = 3

class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
                              'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
