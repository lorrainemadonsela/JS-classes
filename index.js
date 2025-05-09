// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string), isEnabled (boolean), and 
// userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole) to return true or false, a method 
// toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
}
FeatureToggle.prototype.canAccess = function(userRole) {
    return this.userGroupAccess.includes(userRole);
}
FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
}
let feature = new FeatureToggle("New Dashboard", true, ["betaTesters", "admins"]);
let roles = ["betaTesters", "admins", "users"];

// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName (string), projectDetails (object with name and 
// hourlyRate), and logs (array of objects with date, hoursWorked), then add prototype methods to calculate total earnings, filter logs by date range, and determine 
// if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}
TimeLog.prototype.totalEarnings = function() {
    let totalHours = this.logs.reduce((i, log) => i + log.hoursWorked, 0);
    return totalHours * this.projectDetails.hourlyRate;
}
TimeLog.prototype.filterLogs = function(startDate, endDate) {
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
}
TimeLog.prototype.checkHours = function() {
    let totalHours = this.logs.reduce((i, log) => i + log.hoursWorked, 0);
    if (totalHours > 40) {
        return "Weekly hours exceed 40";
    } else {
        return "Weekly hours are within the required limit";
    }
}
const timeLog = new TimeLog("John Doe", { name: "Project X", hourlyRate: 50 }, [ { date: new Date("2022-01-01"), hoursWorked: 10 },{ date: new Date("2022-01-02"), hoursWorked: 15 },{ date: new Date("2022-01-03"), hoursWorked: 20 }]);
console.log(timeLog.totalEarnings());
console.log(timeLog.filterLogs(new Date("2022-01-01"), new Date("2022-01-02")));
console.log(timeLog.checkHours());

// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email), items 
// (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, update order status 
// based on payment, and categorize order urgency using switch and conditional statements.


function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
}
Order.prototype.computeTotalCost = function() {
    return this.items.reduce((i, item) => i + item.quantity * item.unitPrice, 0);
}
Order.prototype.updateOrderStatus = function(paymentStatus) {
    if (paymentStatus === "paid") {
        this.status = "confirmed";
    } else {
        this.status = "pending";
    }
}
Order.prototype.categorizeOrderUrgency = function() {
    let totalCost = this.computeTotalCost();
    switch (true) {
        case totalCost > 1000:
            return "High";
        case totalCost > 500:
            return "Medium";
        default:
            return "Low";
    }
}
const order = new Order({ name: "Mary Jane", email: "mary@gmail.com" }, [{ productName: "Product A", quantity: 2, unitPrice: 100 },{ productName: "Product B", quantity: 1, unitPrice: 500 }], "pending");
console.log(order.computeTotalCost());
order.updateOrderStatus("paid");
console.log(order.status);
console.log(order.categorizeOrderUrgency());

// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys like communication, 
// efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify performance level using control flow, 
// and add new feedback based on conditions.


class Employee {
    constructor(id, name, performanceMetrics, feedback) {
        this.id = id;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback = feedback;
    }
}
    
Employee.prototype.calculateAverageScore = function(){
    let scores = Object.values(this.performanceMetrics);
    return scores.reduce((i, score) => i + score, 0) / scores.length;
}
Employee.prototype.classifyPerformanceLevel = function(){
    let averageScore = this.calculateAverageScore();
    if (averageScore >= 4) {
        return "Excellent";
    } else if (averageScore >= 3) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}
Employee.prototype.addNewFeedback = function(feedback) {
    if (feedback.length > 0) {
        this.feedback.push(feedback);
    }
}

let employee = new Employee(1, "John Doe", {communication:4,efficiency:4.5,reliability:4.2 },[]);
console.log(employee.calculateAverageScore());
console.log(employee.classifyPerformanceLevel());
employee.addNewFeedback("Great job!");
console.log(employee.feedback);

// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students (array of objects 
// with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and 
// use control flow to output different messages for instructors with more or less than 5 students.

class Course{
    constructor(title,instructor,students){
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }
}
Course.prototype.completedCourse = function(){
    return this.students.filter(student=> student.completionStatus).map(student=>student.name);
}
Course.prototype.countEnrolledStidents = function(){
    const expertise = Object.values(this.instructer.expertise);
    return this.students.filter(student=>student.expertise === expertise).length;
}
Course.prototype.differentMessages = function(){
    const messages = this.countEnrolledStidents();
    if(this.students>5){
        console.log(`You are enrolled`);
    }
    else{
        console.log(`You are not enrolled`);
    }
}

const course1 = new Course("Sciences",{Rie:Physics},7);
const course2 = new Course("Tech",{Alfie:Computer},4);
console.log(course1.completedCourse());
console.log(course2.completedCourse());
console.log(course1.countEnrolledStidents());
console.log(course2.countEnrolledStidents());
console.log(course1.differentMessages());
console.log(course2.differentMessages());