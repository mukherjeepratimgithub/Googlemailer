const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "527905795196-m4ui1sa62ma75j180rkh4ahpagmdt80r.apps.googleusercontent.com", 
    "KbEZzhXkZwg2fAHIIdPzgXUZ", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "Your Refresh Token Here"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "pratimmukherjeeiem@gmail.com", 
         clientId: "527905795196-m4ui1sa62ma75j180rkh4ahpagmdt80r.apps.googleusercontent.com",
         clientSecret: "KbEZzhXkZwg2fAHIIdPzgXUZ",
         refreshToken: "Your Refresh Token Here",
         accessToken: accessToken
    }
});

tls: {
    rejectUnauthorized: false
  }

  const mailOptions = {
    from: "your.gmail.here@gmail.com",
    to: "some.other.email@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});