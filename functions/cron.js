const cron = require('node-cron');
const { User } = require('../models/index')
const { sendEmail } = require('./send_email')


//Cron Job to run around 9am Server Time 
async function emailScheduler() {
  const users = await User.findAll()
  cron.schedule('* * 09 * * *', () => {
    // cron.schedule('* * * * *', () => {
      console.log('cron is running')
      users.forEach(element => {
        let now = new Date().setHours(0, 0, 0, 0)
        let bday = new Date(element.birthday).setHours(0, 0, 0, 0)
        console.log(now, bday)
        console.log(now == bday)
        if (now === bday) { // still sending on 9 server time
            console.log(`sending email to ${element.email}`)
            sendEmail(element.email, element.firstName + element.lastName)
        }
      });
  });
}

module.exports = { emailScheduler }