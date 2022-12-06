const cron = require('node-cron');
const { User } = require('../models/index')
const { sendEmail } = require('./send_email')


//T0 Get the Current Year, Month And Day
var dateYear = new Date().getFullYear();
var dateMonth = new Date().getMonth(); // start counting from 0
var dateDay = new Date().getDate();// start counting from 1

//Cron Job to run around 9am Server Time 
async function emailScheduler() {
  const users = await User.findAll()
  cron.schedule('* * 09 * * *', () => {
    // cron.schedule('* * * * *', () => {
        console.log('cron is running')
      ///The Main Function 
    //   const sendWishes =  
      // looping through the users
      console.log('u', users)
      users.forEach(element => {
            console.log('e', element)
          // Spliting the Date of Birth (DOB) 
          // to get the Month And Day
          let d = element.birthday.split('-')
          console.log(d)
          let dM = +d[1]  // For the month
          let dD = +d[0] // for the day 
          console.log( typeof dM, dM, dD) //return number
          // Sending the Mail
          if(dateDay == dD && dateMonth == dM  ){ // checking if its 9 am on user local time not done yet
              console.log(element)
              sendEmail(element.email, element.firstName + element.lastName)
          } 
      });
  });
}

module.exports = { emailScheduler }