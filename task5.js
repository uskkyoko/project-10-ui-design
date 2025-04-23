class Hobby
{
    constructor(name, isIndoors, weeklyHours) {
        this.name = name;
        this.isIndoors = isIndoors;
        this.weeklyHours = weeklyHours;
    }

    describe(){
        console.log(`The hobby ${this.name} is ${this.isIndoors ? "an indoor" : "an outdoor"} activity.`);
        console.log(`I spend about ${this.weeklyHours} hours per week on it.\n\n`); 
    }
}
let hobby1 = new Hobby("photography", false, 5);
hobby1.describe();
let hobby2 = new Hobby("reading", true, 10);
hobby2.describe();