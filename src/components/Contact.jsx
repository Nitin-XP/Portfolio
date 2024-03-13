import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const formref = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_tem4aqm',
      'template_fx9nuem',
      {
        from_name: form.name,
        to_name: 'Nitin',
        to_email: 'nitinkumar150103@gmail.com',
        message: form.message,
      },
      'kyYhrU0Ag2qH4JOWE'
    ).then(() => {
      setLoading(false);
      alert("Thank You! I'll get back to you as soon as Possible.");
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert("Something Went Wrong!")
    });
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl ">

        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form action="" ref={formref} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8 ">

          <label htmlFor="" className="flex flex-col"><span className="text-white mb-4 font-medium">Your Name</span></label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />

          <label htmlFor="" className="flex flex-col"><span className="text-white mb-4 font-medium">Your Email</span></label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your Email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />

          <label htmlFor="" className="flex flex-col"><span className="text-white mb-4 font-medium">Your Message</span></label>
          <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />

          <button type='submit' className="bg-tertiary py-3 px-8 outline-none m-auto w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:text-black hover:bg-yellow-400 font-serif ">
            {loading ? "Sending" : 'Send'}
          </button>
        </form>
      </motion.div >

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")