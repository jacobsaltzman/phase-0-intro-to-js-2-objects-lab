// Write your solution in this file!
const employee = {
    name: "Steve",
    streetAddress: 90210
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, name, streetAddress){
        obj[name] = streetAddress;
    return obj;
}

function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}