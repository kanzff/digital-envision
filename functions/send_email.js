
const axios = require('axios');

function sendEmail(email, name) {
  axios.post('email-service.digitalenvision.com.au/send-email', {
    email,
    message: `“Hey, ${name} it's your birthday”.`
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

module.exports = { sendEmail }