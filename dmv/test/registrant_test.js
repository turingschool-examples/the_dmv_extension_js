var assert = require('chai').assert;
var { createRegistrant, earnPermit} = require('../exercises/registrant');

describe('Registrant', function() {

  it.skip('should be able to create a registrant with a name and age', function() {
    var registrant = createRegistrant('Jeff', 16);

    assert.equal(registrant.name, 'Jeff');
    assert.equal(registrant.age, 16);
  });

  it.skip('should be able to have a different name and age', function() {
    var registrant = createRegistrant('Louisa', 24);

    assert.equal(registrant.name, 'Louisa');
    assert.equal(registrant.age, 'Louisa', 24);
  });

  it.skip('should default registrants to not having a permit', function() {
    var registrant = createRegistrant('Louisa', 24);

    assert.equal(registrant.permit, false);

  });

  it.skip('should set permit based on what argument is passed in', function() {
    var registrant = createRegistrant('Saphira', 18, true);

    assert.equal(registrant.permit, true);
  });

  it.skip('should by default have license data', function() {
    var registrant = createRegistrant('Saphira', 18, true);

    assert.equal(registrant.licenseData, {written: false, license: false, renewed: false});
    assert.equal(registrant.licenseData.written, false);
    assert.equal(registrant.licenseData.license, false);
    assert.equal(registrant.licenseData.renewed, false);
  });

  it.skip('should be able to earn a permit', function() {
    var registrant = createRegistrant('Saphira', 18, true);

    assert.equal(registrant.permit, false);

    registrant.earnPermit;
    
    assert.equal(registrant.permit, true);
  });
});
