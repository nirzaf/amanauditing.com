import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
  return (
    <div className="bg-white">
      <ContactHero />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
          <ContactForm />
          <ContactMap />
        </div>
      </section>
    </div>
  );
};

export default Contact;