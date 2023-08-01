const nodemailer = require('nodemailer')

const homePage = (req, res) =>{
    res.render('index')
}

const sendEmail =async (req,res)=> {
    const name = await req.body.name
    const phone = await req.body.phone
    const subject = await req.body.subject
    const from = await req.body.from
    const to = await req.body.to
    const content = await req.body.content
    
    const transporter =  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'surrealdevelopers@gmail.com',
      pass: 'auroras2145'
    }
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <mardukslave@gmail.com>', // sender address
      to: "mardukslave@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
    
  }
  
  main().catch(console.error);
  res.render('../views/index')
}

module.exports = {sendEmail,homePage}