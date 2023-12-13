/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      message: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        await toast.promise(
          emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
              from_name: values.name,
              to_name: "Haowei",
              from_email: values.email,
              message: values.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
          ),
          {
            pending: "Please wait for sending your message.",
            success: "Thank you. I will get back to you as soon as possible.",
            error: "Ahh, something went wrong. Please try again.",
          }
        );
        formik.resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
  });
  return (
    <div className="flex xl:flex-row flex-col-reverse xl:mt-12 gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              name="name"
              type="text"
              placeholder="What's your name?"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"
            />
            {formik.errors.name && formik.touched.name ? (
              <div className=" text-red-600 mt-2 text-[13px] px-6">
                {formik.errors.name}
              </div>
            ) : null}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              name="email"
              type="email"
              placeholder="What's your email?"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className=" text-red-600 mt-2 text-[13px] px-6">
                {formik.errors.email}
              </div>
            ) : null}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows={7}
              name="message"
              type="text"
              placeholder="What you want to say?"
              id="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none font-medium"
            />
            {formik.errors.message && formik.touched.message ? (
              <div className=" text-red-600 mt-2 text-[13px] px-6">
                {formik.errors.message}
              </div>
            ) : null}
          </label>

          <button
            disabled={isLoading}
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
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
