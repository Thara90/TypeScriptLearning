interface emplyee{
    fName: string,
    lName : string,
    Id : number
}

function getEmployeeDetails(empDetails:emplyee){
    console.log(empDetails.fName);
    console.log(empDetails.lName);
    console.log(empDetails.Id);
}

getEmployeeDetails({
    fName : 'Jane',
    lName : 'Watson',
    Id : 100
})