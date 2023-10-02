/*import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaToken: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setForm({
      ...form,
      recaptchaToken: token,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.recaptchaToken) {
      alert("Por favor, completa el reCAPTCHA antes de enviar el formulario.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_u7pfzdg",
        "template_xytmnf8",
        {
          from_name: form.name,
          to_name: "Portfolio",
          from_email: form.email,
          to_email: "maleurquizu@gmail.com",
          message: form.message,
        },
        "27K2b9EN_8JNlLP-X"
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias por tu mensaje! Te responderé a la mayor brevedad posible :)");

          setForm({
            name: "",
            email: "",
            message: "",
            recaptchaToken: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, algo salió mal. Por favor, intenta nuevamente.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <h3 className={styles.sectionHeadText}>Contactame</h3>

       c
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");*/


import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "react-modal";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
  content: {
    width: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#100d25",
    border: "none",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
};

Modal.setAppElement("#root");

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaToken: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (token) => {
    setForm({
      ...form,
      recaptchaToken: token,
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.recaptchaToken) {
      openModal();
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_u7pfzdg",
        "template_xytmnf8",
        {
          from_name: form.name,
          to_name: "Portfolio",
          from_email: form.email,
          to_email: "maleurquizu@gmail.com",
          message: form.message,
        },
        "27K2b9EN_8JNlLP-X"
      )
      .then(
        () => {
          setLoading(false);
          openModal();
          setForm({
            name: "",
            email: "",
            message: "",
            recaptchaToken: "",
          });
        },
        (error) => {
          setLoading(false);
          openModal();
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <h3 className={styles.sectionHeadText}>Contactame</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nombre</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="¿Cuál es tú nombre?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="¿Cuál es tu dirección web?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mensaje</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='¿Qué quieres decir?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className='form-captcha'>
            <ReCAPTCHA
              sitekey="6LeQR20oAAAAAMHy_2Z9ma3IHBpffX5NgaWxcgUc"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel='Mensaje'
      >
        <h2>¡Mensaje!</h2>
        {loading ? (
          <p>Enviando mensaje...</p>
        ) : (
          <p>Gracias por tu mensaje! Te responderé a la mayor brevedad posible :)</p>
        )}
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");


