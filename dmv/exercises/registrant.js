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
  if (registrantParameter.age >= 16) {
    registrantParameter.permit = true;
    return "You have successfully earned a permit!";
  } else {
    return "Sorry, you are not able to earn a permit right now.";
  }
}

function takeLicenseExam(registrantParameter) {
  if (registrantParameter.permit) {
    registrantParameter.licenseData.written = true;
    return "Great job! You can take your test.";
  } else {
    return "Sorry, you need to earn a permit first.";
  }
}
module.exports = {
  createRegistrant,
  earnPermit,
  takeLicenseExam,
};
