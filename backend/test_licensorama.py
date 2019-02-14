from app import models, routes

def test_serialize_list():
    license1 = models.License()
    license1.id = 1
    license1.licensekey = "key1"
    license1.product = "product1"
    licenses = [license1]
    json = {'id': 1, 'licenseKey': 'key1', 'product': 'product1'}
    assert routes.serialize_list(licenses) == [json] 
