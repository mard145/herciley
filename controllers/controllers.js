const nodemailer = require('nodemailer')
//batchSend.js
var SibApiV3Sdk = require('sib-api-v3-sdk');
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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';



const homePage = (req, res) =>{
    res.render('index')
}

const sendEmail =async (req,res)=> {
    const name = await req.body.name
    const phone = await req.body.phone
    const subject = await req.body.subject
    const from = await req.body.from
    const to = await req.body.email
    const content = await req.body.content
    
//     const transporter =  nodemailer.createTransport({
//     host: "smtp-relay.brevo.com",
//     port: 587,
//     secure: true,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: 'surrealdevelopers@gmail.com',
//       pass: 'auroras2145'
//     }
//   });
  
//   // async..await is not allowed in global scope, must use a wrapper
//   async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: '"Fred Foo " <mardukslave@gmail.com>', // sender address
//       to: "mardukslave@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//     //
//     // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//     //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//     //       <https://github.com/forwardemail/preview-email>
//     //
    
//   }
  
//   main().catch(console.error);
console.log(JSON.stringify(to))
new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

    "sender":{ "email":"mardukslave@gmail.com", "name":"Herci Maciel"},
    "subject":subject,
    "htmlContent":`<!DOCTYPE html><html><body><h1>Hello Herci Maciel.</h1><p>${content}</p><p>Client contact: ${phone}</p><p>${to}</p></body></html>`,
    "params":{
       "greeting":"This is the default greeting",
       "headline":"This is the default headline"
    },
  "messageVersions":[
    //Definition for Message Version 1 
    {
        "to":[
           {
              "email":to,
              "name":name
           }
        ],
        "htmlContent":`<!DOCTYPE html><html><body><h1>Hello ${name} We received your message!</h1><p>We will get in touch shorly.</p><p>Best</p></body></html>`,
        "subject":"We are happy to be dance with you"
     },

     {
        "to":[
           {
              "email":"mardukslave@gmail.com",
              "name":name
           }
        ],
        "htmlContent":`<!DOCTYPE html><html><body><h1>Hello Herci Maciel.</h1><p>Message: ${content}</p><p>Client contact: ${phone}</p><p>Client email:${to}</p></body></html>`,
        "subject":subject
     },
    
    // Definition for Message Version 2
    //  {
    //     "to":[
    //        {
    //           "email":JSON.stringify(to),
    //           "name":JSON.stringify(name)
    //        }
    //     ]
    //  }
  ]

}).then(function(data) {
 console.log(data);
}, function(error) {
 console.error(error);
});
  res.render('../views/index')
}

module.exports = {sendEmail,homePage}