import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {  BsGithub } from "react-icons/bs";
import { MdContactPhone, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import {CiFacebook} from 'react-icons/ci';
import { FiLinkedin } from "react-icons/fi";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        "service_dy7hso9",
        "template_tl3o34d",
        {
          to_name: name,
          from_email: email,
          message: message,
        },
        "FnbD4nzqExfRZA0mi"
      );

      console.log("Email sent:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="max-w-container mx-auto lgl:px-20 py-5">
      <SectionTitle title="Contact With Me" titleNo="05" />
      <div className="mx-5 max-w-contentContainer my-10 lgl:my-20">

        <div className="grid grid-cols-1  mdl:grid-cols-2 gap-10 items-center max-w-screen-xl mx-auto">
          <div  className="flex flex-col  justify-center md:text-left">
            <div className="text-center flex items-center justify-center">
              {/* <img   src={sms} alt="" /> */}
            </div>
            <p className="mdl:text-xl mdl:text-justify w-[90%] mdl:w-full mx-auto text-white">
              i&lsquo;d love if your reached out to me. even it&lsquo;s just to say &lsquo;Hey!&lsquo;
              Don&lsquo;t hesitate Drop me a Line and i&lsquo;ll get back to you ASAP!{" "}
            </p>

           <div className="flex flex-col  w-[90%] mdl:w-full mx-auto items-start">
           <h2 className=" md:text-xl flex items-center  gap-1">
              {" "}
              <MdEmail />
              mdansarulislam641@gmail.com
            </h2>

            <h3 className="mdl:text-xl   flex items-center  gap-2">
              <MdContactPhone /> 01786891119
            </h3>
            <h4 className="  flex items-center gap-1 mdl:text-xl">
              <MdOutlineLocationOn /> Thakurgaon , Rangpur
            </h4>
           </div>
            {/* social icons  */}
            <div className="flex mdl:w-full w-[90%] mx-auto  gap-5 pt-2 z-40">
            <a href="https://www.facebook.com/md.ansarulislam.641/" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><CiFacebook size={22}/></span>
            </a>

            <a href="https://www.linkedin.com/in/md-ansarul-haque/" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><FiLinkedin size={22}/></span>
            </a>
            <a href="https://github.com/mdansarulislam641" target='_blank'>
                <span className='w-10 h-10 bg-hoverColor inline-flex items-center justify-center rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all  duration-300'><BsGithub size={22}/></span>
            </a>
            </div>
          </div>
          <div
           
            className="shadow-cardShadow py-10 px-10 rounded-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-white md:text-xl">Name</label>
                <input
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className=" rounded-lg py-3  inset-11 bg-textDark/10 px-5 shadow-cardShadow text-white placeholder:text-white input mt-1 input-bordered w-full"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="my-2">
                <label className="text-white mdl:text-xl">Email</label>
                <input
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className=" rounded-lg py-3  inset-11 bg-textDark/10 px-5 shadow-cardShadow text-white placeholder:text-white input mt-1 input-bordered w-full"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="text-white md:text-xl">Message</label>
                <textarea
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className=" rounded-lg py-3  inset-11 bg-textDark/10 px-5 shadow-cardShadow text-white placeholder:text-white input mt-1 input-bordered w-full"
                  name="message"
                  placeholder="Your Message"
                />
              </div>
              <input
                className="btn  rounded-lg py-3  inset-11  px-5 shadow-cardShadow text-white placeholder:text-white input mt-1 input-bordered w-full  transition-all duration-500 hover:bg-transparent bg-textGreen/10 cursor-pointer"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
