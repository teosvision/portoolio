import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWarpper } from "../hoc";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_dqi0g37",
        "template_bm5hz6u",
        {
          from_name: from.name,
          to_name: "Mateo",
          from_email: form.email,
          message: form.message,
        },
        "PTMz02AieC7P0YccJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong !");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          // ref={formRef}
          onSubmit={handleSubmit}
          className="flex mt-12 flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name ?"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg font-medium placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input
              type="text"
              name="email"
              placeholder="What's your email ?"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg font-medium placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say ?"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 rounded-lg font-medium placeholder:text-secondary"
            />
          </label>
          <button
            className="bg-teal-300 font-bold hover:shadow-emerald-700 rounded-xl shadow-md py-3 px-8"
            type="submit"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        {" "}
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWarpper(Contact, "contact");
