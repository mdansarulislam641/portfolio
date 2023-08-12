import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdContactPhone, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import SectionTitle from "./SectionTitle";

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
    <section id="contact" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Contact With Me" titleNo="05" />
      <div className="mx-5 max-w-contentContainer my-20">

        <div className="grid grid-cols-1  md:grid-cols-2 gap-10 items-center max-w-screen-xl mx-auto">
          <div data-aos="fade-down" className="text-center md:text-left">
            <div className="text-center flex items-center justify-center">
              {/* <img   src={sms} alt="" /> */}
            </div>
            <p className="text-xl text-white">
              i'd love if your reached out to me. even it's just to say "Hey!"
              Don't hesitate Drop me a Line and i'll get back to you ASAP!{" "}
            </p>

            <h2 className="text-color text-xl flex items-center gap-1">
              {" "}
              <MdEmail />
              mdansarulislam641@gmail.com
            </h2>

            <h3 className="text-xl text-color flex items-center gap-2">
              <MdContactPhone /> 01786891119
            </h3>
            <h4 className="text-color flex items-center gap-1 text-xl">
              <MdOutlineLocationOn /> Thakurgaon , Rangpur
            </h4>
            {/* social icons  */}
            <div className="flex justify-start gap-5 pt-2 z-40">
              <a
                href="https://www.facebook.com/md.ansarulislam.641"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <BsFacebook
                  size={24}
                  className=" text-gray-100 cursor-pointer"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/md-ansarul-haque/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin
                  size={24}
                  className=" text-gray-100 cursor-pointer"
                />
              </a>
              <a
                href="https://github.com/mdansarulislam641"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={24} className=" text-gray-100 cursor-pointer" />
              </a>
            </div>
          </div>
          <div
           
            className="shadow-cardShadow py-10 px-10 rounded-2xl"
          >
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-white text-xl">Name</label>
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
                <label className="text-white text-xl">Email</label>
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
                <label className="text-white text-xl">Message</label>
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
