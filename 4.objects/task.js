function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};


Student.prototype.setSubject = function(subjectName) { this.subject = subjectName };

Student.prototype.addMark = function(mark) {

    if (this.marks === undefined) {
        this.marks = [];
        this.marks.push(mark);
    } else {
        this.marks.push(mark);
    }
};

Student.prototype.addMarks = function(...mark) { this.marks = mark };

Student.prototype.getAverage = function(marks) {

    let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }
    return sum / this.marks.length;
};


Student.prototype.exclude = function(reason) {
    delete Student.subject;
    delete Student.marks;
    this.excluded = reason;
}