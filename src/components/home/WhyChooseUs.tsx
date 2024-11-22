import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, imageAlt, title, description }) => (
  <div className="text-center p-6">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="w-full h-48 object-cover rounded-lg mb-6"
    />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/audit.webp?updatedAt=1732211618079",
      imageAlt: "Accurate Accounting",
      title: "Accurate Accounting Records",
      description: "When it comes to ensuring the accuracy of your company's financial records, you need a partner that you can trust."
    },
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/Accounting-Auditing-Services-1.jpg?updatedAt=1732211621818",
      imageAlt: "Accounting Services",
      title: "Accounting Services",
      description: "We provide a range of accounting services for individuals and businesses of all sizes. Our first step is to understand what you do and how you do it."
    },
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/accounting-auditing-new-e1561310683221.jpg?updatedAt=1732211620934",
      imageAlt: "Financial Audits",
      title: "Financial Statement Audits",
      description: "You may need to secure additional financing, satisfy a legal requirement or value your company's stock which requires a financial statement audit."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
