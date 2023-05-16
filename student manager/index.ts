class studentsProfile {
  name;
  id;
  coursesenroll:Course[];
  balance;
  constructor(name:string) {
      this.id = generateID();
      this.name = name;
      this.coursesenroll = [];
      this.balance = 0;
  }
  enroll(course:Course) {
      if (this.coursesenroll.includes(course)) {
          console.log(`${this.name} is already enrolled in ${course.getName()}`);
      }
      else if (this.balance > course.getPrice()) {
          console.log(`${this.name} cannot enroll in ${course.getName()} due to 
insufficent balance.`);
      }
      else {
          this.coursesenroll.push(course);
          this.balance -= course.getPrice();
          console.log(`${this.name} has successfully enrolled in ${course.getName()}.`);
      }
  }
  showBalance() {
      console.log(`${this.name}'s balance is ${this.balance} PKR`);
  }
  tuitionfees(amount:number) {
      this.balance += amount;
      console.log(`${this.name} has paid ${amount} PKR`);
  }
  getStatus() {
      console.log(`Name: ${this.name} \n
ID:${this.id} \n
Enrolled Courses:${this.coursesenroll.map((course) => course.getName()).join(',')}\n
Balance:${this.balance} PKR`);
  }
}
;
class Course {
  name;
  Price;
  constructor(name:string, Price:number) {
      this.name = name;
      this.Price = Price;
  }
  getName() {
      return this.name;
  }
  getPrice() {
      return this.Price;
  }
}
function generateID() {
  const iD = Math.floor(Math.random() * 90000) + 10000;
  return iD.toString();
}
const web = new Course("Web 3.0", 3000);
const bcc = new Course('Blockchain', 3500);
const ai = new Course('Artifical Intellgence', 2800);
const stu1 = new studentsProfile(`Hafsa`);
const stu2 = new studentsProfile('Tufail');
const stu3 = new studentsProfile('Hira');
stu1.enroll(web);
stu2.enroll(bcc);
stu3.enroll(ai);
stu1.showBalance();
stu1.tuitionfees(2500);
stu1.enroll(web);
stu2.getStatus();
stu3.getStatus();