import { createTransport } from "nodemailer";
import { emailHtml } from "./emailHtml.js";
import jwt from 'jsonwebtoken'
export const sendEmail = async(email) =>{
    const transporter = createTransport({
        service:"gmail",
        auth: {
          user: "a.elmonged870@gmail.com",
          pass: "gxvtkdwlzwaqmiay",
        },
      });
      jwt.sign({email},'hello',async(err,token)=>{
        const info = await transporter.sendMail({
          from: '"Route Course 👻" <a.elmonged870@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
        
          html: emailHtml(token) // html body
        });
        console.log("Message sent: %s", info.messageId);
      })
      
   
}
