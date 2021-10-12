// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(fName, lName) {
    const user = {
    firstName: fName,
    lastName: lName
};
return user;
 }

//Create Set Age

function setAge(userOne, ageOne) {
    userOne['age'] = ageOne;
    return userOne;
}

//Create increment Age

function incrementAge(user) {
    user.age += 1;
    return user;
}

//Create fix car

function fixCar(car) {
    car.needsMaitenance = false
    return car;
}

//Create add grades

function addGrades(student, newGrades) {
    for (let i = 0; i < newGrades.length; i++) {
        const newGrade = newGrades[i];
        student.grades.push(newGrade);
    }
    return student;
}

//Get Data type

function getDataType(car) {
    make: 'Ford',
    model: 'Mustang',
    year: '1969',
    needsMaitenance: false
    return car;
}








// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
