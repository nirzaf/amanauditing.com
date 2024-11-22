import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <ContactCard
        icon={<Phone className="h-8 w-8 text-[#5616b3]" />}
        title="Phone"
        info="+974 4012 3456"
        delay={0.2}
      />
      <ContactCard
        icon={<Mail className="h-8 w-8 text-[#5616b3]" />}
        title="Email"
        info="info@amnaauditing.com"
        delay={0.4}
      />
      <ContactCard
        icon={<MapPin className="h-8 w-8 text-[#5616b3]" />}
        title="Office"
        info="Al Emadi Business Center, C Ring Road, Doha, Qatar"
        delay={0.6}
      />
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  delay: number;
}

const ContactCard = ({ icon, title, info, delay }: ContactCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative group h-full"
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-[#5616b3] to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
        <div>
          <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
        <p className="text-gray-600">{info}</p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
