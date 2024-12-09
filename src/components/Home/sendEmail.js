import emailjs from "@emailjs/browser";

export const sendEmail = (formData) => {
  emailjs.init({
    publicKey: "fkwLvb_jL07foc91Q",
    // Do not allow headless browsers
    blockHeadless: true,
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
  emailjs
    .send("service_2j8ak97", "template_ri88krk", {
      from_email: formData.email,
      from_name: formData.name,
      message: formData.message,
    })
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
