class createRegistrant {
  constructor(nameParameter, ageParameter, permitParameter = false) {
    this.name = nameParameter;
    this.age = ageParameter;
    this.permit = permitParameter;
    this.licenseData = {
      written: false,
      license: false,
      renewed: false,
    };
  }
}

function earnPermit(registrantParameter) {
  registrantParameter.permit = true;
  return "You have successfully earned a permit!";
}
module.exports = {
  createRegistrant,
  earnPermit,
  // takeLicenseExam
};
