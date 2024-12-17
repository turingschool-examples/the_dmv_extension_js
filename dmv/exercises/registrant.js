

module.exports = {
  createRegistrant(name, age, permit=false) {
    return {
      name: name,
      age: age,
      permit: permit,
      licenseData: {
        written: false,
        license: false,
        renewed: false
      }
    }
  }
  // earnPermit,
  // takeLicenseExam
}