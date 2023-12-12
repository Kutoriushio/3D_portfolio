/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidate = true;
    let validationErrors = {};
    if (form.name.length < 2) {
      validationErrors = {
        ...validationErrors,
        name: "Name must be at least 2 characters",
      };
      isValidate = false;
    }

    if (form.message.length === 0) {
      validationErrors = {
        ...validationErrors,
        message: "Message can not be blank.",
      };
      isValidate = false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      validationErrors = {
        ...validationErrors,
        email: "Invalid Email.",
      };
      isValidate = false;
    }
    setErrors(validationErrors);
    if (!isValidate) {
      return;
    }
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Haowei",
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          window.location.reload();
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setErrors({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="flex xl:flex-row flex-col-reverse xl:mt-12 gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              name="name"
              type="text"
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.name && (
              <span className=" text-red-600 mt-2 text-[13px] px-6">
                {errors.name}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.email && (
              <span className=" text-red-600 mt-2 text-[13px] px-6">
                {errors.email}
              </span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              name="message"
              rows={7}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <span className=" text-red-600 mt-2 text-[13px] px-6">
                {errors.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 w-fit px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:h-auto xl:flex-1 md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
