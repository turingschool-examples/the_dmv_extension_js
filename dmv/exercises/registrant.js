

class createRegistrant {
  constructor(nameParameter, ageParameter, permitParameter = false) {
    this.name = nameParameter
    this.age = ageParameter
    this.permit = permitParameter
    this.licenseData = {
      written: false,
      license: false,
      renewed: false,
    };
  }
}
module.exports = {
  createRegistrant
  // earnPermit,
  // takeLicenseExam
}