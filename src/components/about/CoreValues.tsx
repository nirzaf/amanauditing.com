import { CheckCircle, Award, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <CheckCircle className="h-12 w-12 text-[#5616b3]" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of professional ethics and transparency.'
    },
    {
      icon: <Award className="h-12 w-12 text-[#5616b3]" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.'
    },
    {
      icon: <Users className="h-12 w-12 text-[#5616b3]" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand and meet their unique needs.'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
