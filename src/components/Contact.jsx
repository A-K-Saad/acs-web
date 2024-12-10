import { getDatabase, push, ref, set } from "firebase/database";
import { useState } from "react";
import { sendEmail } from "./sendEmail";
// import { sendEmail } from "./sendEmail";

const Contact = () => {
  const [formData, setFormData] = useState({});

  // pushing data to database
  const sendMessage = () => {
    set(push(ref(getDatabase(), "messages/")), {
      ...formData,
    })
      .then(() => {
        // sending email
        sendEmail(formData);
        alert("Thanks for sending your message!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section id="contact">
        <p className="text-sm mb-6">04/ Contact</p>
        <h1 className="text-7xl">Let&#39;s</h1>
        <h1 className="text-7xl outline-text mt-0">Discuss</h1>
        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
            e.target.reset();
          }}
        >
          <input
            type="text"
            className="border-b-2 focus:outline-none focus:border-[#7a3b6b] mt-10 text-3xl w-full md:max-w-2xl placeholder:text-zinc-300 transition"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              const { name, value } = e.target;
              setFormData({ ...formData, [name]: value });
            }}
            required
          />
          <input
            type="email"
            name="email"
            className="border-b-2 focus:outline-none focus:border-[#7a3b6b] mt-10 text-3xl w-full md:max-w-2xl placeholder:text-zinc-300 transition"
            placeholder="Email"
            onChange={(e) => {
              const { name, value } = e.target;
              setFormData({ ...formData, [name]: value });
            }}
            required
          />
          <textarea
            className="border-b-2 focus:outline-none focus:border-[#7a3b6b] mt-16 text-3xl w-full md:max-w-2xl placeholder:text-zinc-300 transition h-36"
            placeholder="Your Message"
            name="message"
            onChange={(e) => {
              const { name, value } = e.target;
              setFormData({ ...formData, [name]: value });
            }}
            required
          />
          <button
            href="https://github.com/A-K-Saad?tab=repositories"
            target="_blank"
            className="px-16 py-3 rounded-md bg- border-accent border text-accent hover:text-white shadow-xl flex items-center justify-center w-max hover:bg-[#5c2750] transition-all mt-9"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
