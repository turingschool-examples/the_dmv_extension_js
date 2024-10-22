
function createRegistrant(name, age, permit = false, licenseData) {
  return {
    name: name,
    age: age,
    permit: permit,
    licenseData: licenseData
  }
}

module.exports = {
  createRegistrant
  // earnPermit,
  // takeLicenseExam
}