

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
  },

  earnPermit(registrant) {
    if (registrant.age >= 16) {
      registrant.permit = true;
      return "You have successfully earned a permit!";
    }
    return "Sorry, you are not able to earn a permit right now.";
  },

  takeLicenseExam(registrant) {
    if (registrant.permit) {
      registrant.license = true;
      return "Great job! You can take your test.";
    }
    return "Sorry, you need to earn a permit first."
  }
}