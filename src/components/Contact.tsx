import "../styles/index.css";

import EmailIcon from "../assets/svg/email-icon.svg?react";
import SMSIcon from "../assets/svg/sms.svg?react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-m-2 bg-black p-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-lexend text-center text-5xl font-semibold">Contact</h1>
        <div className="my-10 flex flex-col md:flex-row">
          <p className="m-10 max-w-100 text-center text-xl md:text-left">For any questions or inquiries please feel free to contact me at:</p>
          <div className="flex flex-col gap-5">
            <div className="font-lexend flex items-center justify-between gap-5 rounded-2xl bg-gray-800 p-5">
              <SMSIcon className="h-10 w-10" />
              <span>(519) 329-4982</span>
            </div>
            <div className="font-lexend flex items-center justify-between gap-5 rounded-2xl bg-gray-800 p-5">
              <EmailIcon className="h-10 w-10" />
              <a href="mailto:kevintran784@gmail.com">
                <span>kevintran784@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
