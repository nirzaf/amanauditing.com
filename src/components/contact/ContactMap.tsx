import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.0723658703528!2d51.407118075015426!3d25.268150977665325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d953115c6bef%3A0xbff1b2b3ae5e4bab!2sAmna%20Auditing%20Services!5e0!3m2!1sen!2suk!4v1732303794585!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Amna Auditing Location"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactMap;
