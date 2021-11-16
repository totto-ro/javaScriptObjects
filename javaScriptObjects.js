//Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(arr){
    for( let i=0; i<arr.length;i++ ){
        console.log("Name: " +  arr[i].name + ", Cohort: " +  arr[i].cohort);
    }
    
}
printStudents(students);

//Write a function that accepts an object of users divided into employees and managers, 
//and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function countCharactersName(arrUsers){
    for( let key in arrUsers ){
        console.log( key.toUpperCase() + ":");
        for (let i = 0; i < arrUsers[key].length; i++){
            let num = i + 1;
            let firstName = arrUsers[key][i].first_name;
            let lastName = arrUsers[key][i].last_name;
            let length = firstName.length + lastName.length;
            console.log(num + " - " + firstName + " - " + lastName + " - " + length);
        }
    }
    
}
countCharactersName(users);