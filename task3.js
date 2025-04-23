let hobby = {
    hobbyName: "photography",
    isIndoor: false,
    weeklyHours: 5,
    tools: ["camera", "tripod", "lenses"],
    getHobbySummary: function() {
        console.log("I enjoy " + hobby.hobbyName);
        if (hobby.isIndoor) {
            console.log("It's an indoor hobby.");
        }else{
            console.log("It's an outdoor hobby.");
        }
        console.log("I spend about " + hobby.weeklyHours + " hours per week using tools like: " + hobby.tools.join(", ") + ".");
        return;
    }     
};
hobby.getHobbySummary();

