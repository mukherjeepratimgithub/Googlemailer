const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "Your ClientID "Here", // ClientID
    "Your Client Secret Here", // Client Secret
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
         user: "your.gmail.here@gmail.com", 
         clientId: "Your ClientID Here",
         clientSecret: "Your Client Secret Here",
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