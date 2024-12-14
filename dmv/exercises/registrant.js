

class createRegistrant {
  constructor(nameParameter, ageParameter, permitParameter = false) {
    this.name = nameParameter
    this.age = ageParameter
    this.permit = permitParameter
  }
}
module.exports = {
  createRegistrant
  // earnPermit,
  // takeLicenseExam
}