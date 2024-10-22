
function createRegistrant(name, age, permit = false) {
  return {
    name: name,
    age: age,
    permit: permit
  }
}

module.exports = {
  createRegistrant
  // earnPermit,
  // takeLicenseExam
}