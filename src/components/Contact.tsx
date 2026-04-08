import "../styles/index.css";

import EmailIcon from "../assets/svg/email-icon.svg?react";
import SMSIcon from "../assets/svg/sms.svg?react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-m-2 bg-black p-10 text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-lexend pb-10 text-center text-5xl font-semibold">Contact</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-10 max-w-100 text-center text-xl">For any questions or inquiries please feel free to contact me at:</p>
          <div className="flex w-full max-w-100 flex-col gap-5">
            <div className="font-lexend flex items-center justify-between gap-5 rounded-2xl bg-white p-5 text-black">
              <SMSIcon className="h-10 w-10" />
              <span>(519) 329-4982</span>
            </div>
            <div className="font-lexend 300 flex items-center justify-between gap-5 rounded-2xl bg-white p-5 text-black transition-colors ease-in-out">
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
