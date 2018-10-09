from app import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = product = db.Column(db.String(128), unique=True)

    def __repr__(self):
        return '<Product {}>'.format(self.name)


class License(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    licensekey = db.Column(db.String(500), index=True, unique=True)
    product = db.Column(db.Integer, db.ForeignKey('product.id'))

    def __repr__(self):
        return '<License {}>'.format(self.licensekey)
