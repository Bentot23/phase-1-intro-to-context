// // Your code here
// function createEmployeeRecord(array){
//     const record = {
//         firstName: array[0],
//         familyName: array[1],
//         title: array[2],
//         payPerHour: array[3],
//         timeInEvents: [],
//         timeOutEvents: []
//     }
//     // console.log(record)
//     return record
// }


// function createEmployeeRecords(arrOfArr){
//     let employeeRecords = []
//     arrOfArr.map(employee => {
//         employeeRecords.push(createEmployeeRecord(employee))
//     })
//     // for (const employee of arrOfArr){
//     //     employeeRecords.push(createEmployeeRecord(employee))
//     // }

//     // console.log(employeeRecords)    
//     return employeeRecords
// }

// function createTimeInEvent(eRecordObj, dateStamp){
//     let timeIn = createEmployeeRecord(eRecordObj)
//     let obj = {
//         type: "TimeIn", 
//         hour: parseInt(dateStamp.slice(-4)), 
//         date: dateStamp.slice(0, 10)
//     }
//     timeIn.timeInEvents.push(obj)
//     // console.log("timeIn", timeIn)
//     return timeIn
// }


// function createTimeOutEvent(eRecordObj, dateStamp){
//     let timeOut = createEmployeeRecord(eRecordObj)
//     let obj = {
//         type: "TimeOut", 
//         hour: parseInt(dateStamp.slice(-4)), 
//         date: dateStamp.slice(0, 10)
//     }
//     timeOut.timeOutEvents.push(obj)
//     // console.log('timeOut', timeOut)
//     return timeOut   
// }


// function hoursWorkedOnDate(eRecordObj, date){
//     let hours;
//     // const updatedBpRecord = [createTimeInEvent(eRecordObj, date), createTimeOutEvent(eRecordObj, date)]
//     // console.log(updatedBpRecord)
//     const updatedBpRecordIn = createTimeInEvent(eRecordObj, "0044-03-15 0900");
//     // console.log(updatedBpRecordIn.timeInEvents[0].hour);

//     const updatedBpRecordOut = createTimeOutEvent(eRecordObj, "0044-03-15 1100");
//     // console.log(updatedBpRecordOut.timeOutEvents[0].hour)

//     if(updatedBpRecordIn.timeInEvents[0].date === date) {
//         if(updatedBpRecordOut.timeOutEvents[0].date === date) {
//             hours = updatedBpRecordOut.timeOutEvents[0].hour - updatedBpRecordIn.timeInEvents[0].hour
//         }
//     }

//     // console.log(hours/100)
//     return hours/100
    
// }

// function wagesEarnedOnDate(eRecordObj, date){
//     return (hoursWorkedOnDate(eRecordObj, date)) * eRecordObj.payPerHour
// }


// function allWagesFor() {
    
//     // let allPay = [];
//     // let allDates = [];

//     // for (let i = 0; i < eRecordObj.timeInEvents.length; i++){
//     //     allDates.push(eRecordObj.timeInEvents[i].date)
//     // }

//     // allDates.forEach(date => {
//     //     allPay.push(wagesEarnedOnDate(eRecordObj, date))
//     // });

//     // return allPay.reduce(( previousValue, currentValue ) => previousValue + currentValue)
// }

// function calculatePayroll(arrOfERecordObj){
//     let payroll = [];

//     arrOfERecordObj.forEach(employee => {
//         payroll.push(allWagesFor(employee)) 
//     });

//     return payroll.reduce((previousValue, currentValue) => previousValue + currentValue)
// }

function createEmployeeRecord(array){
    const record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    // console.log(record)
    return record
} 

function createEmployeeRecords(arrOfArr){
    let employeeRecords = []
    arrOfArr.map(employee => {
        employeeRecords.push(createEmployeeRecord(employee))
    })
    // for (const employee of arrOfArr){
    //     employeeRecords.push(createEmployeeRecord(employee))
    // }

    // console.log(employeeRecords)    
    return employeeRecords
}

function createTimeInEvent(eRecordObj, dateStamp){
    let timeIn = createEmployeeRecord(eRecordObj)
    let obj = {
        type: "TimeIn", 
        hour: parseInt(dateStamp.slice(-4)), 
        date: dateStamp.slice(0, 10)
    }
    timeIn.timeInEvents.push(obj)
    // console.log("timeIn", timeIn)
    return timeIn
}


function createTimeOutEvent(eRecordObj, dateStamp){
    let timeOut = createEmployeeRecord(eRecordObj)
    let obj = {
        type: "TimeOut", 
        hour: parseInt(dateStamp.slice(-4)), 
        date: dateStamp.slice(0, 10)
    }
    timeOut.timeOutEvents.push(obj)
    // console.log('timeOut', timeOut)
    return timeOut   
}

function hoursWorkedOnDate(eRecordObj, date){
    let hours;
    
    const updatedBpRecordIn = createTimeInEvent(eRecordObj, "0044-03-15 0900");
    // console.log(updatedBpRecordIn.timeInEvents[0].hour);

    const updatedBpRecordOut = createTimeOutEvent(eRecordObj, "0044-03-15 1100");
    // console.log(updatedBpRecordOut.timeOutEvents[0].hour)

    if(updatedBpRecordIn.timeInEvents[0].date === date) {
        if(updatedBpRecordOut.timeOutEvents[0].date === date) {
            hours = updatedBpRecordOut.timeOutEvents[0].hour - updatedBpRecordIn.timeInEvents[0].hour
        }
    }

    // console.log(hours/100)
    return hours/100
    
}

function wagesEarnedOnDate(eRecordObj, date){
    return (hoursWorkedOnDate(eRecordObj, date)) * eRecordObj.payPerHour
}


function allWagesFor() {
    
    const cRecord = wagesEarnedOnDate(eRecordObj, date);


    let allPay = [];
    let allDates = [];

    for (let i = 0; i < cRecord.timeInEvents.length; i++){
        allDates.push(cRecord.timeInEvents[i].date)
    }

    allDates.forEach(date => {
        allPay.push(wagesEarnedOnDate(eRecordObj, date))
    });

    return allPay.reduce(( previousValue, currentValue ) => previousValue + currentValue)
}

function calculatePayroll(arrOfERecordObj){
    let payroll = [];

    arrOfERecordObj.forEach(employee => {
        payroll.push(allWagesFor(employee)) 
    });

    return payroll.reduce((previousValue, currentValue) => previousValue + currentValue)
}
