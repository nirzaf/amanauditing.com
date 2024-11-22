import React from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#5616b3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amna Auditing</h1>
          <p className="text-xl text-gray-200">
            Leading the way in professional audit and assurance services
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/c1glhbr6p/istockphoto-610753364-612x612-2.jpg?updatedAt=1732211618256"
                alt="Amna Accounting Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-[#5616b3] opacity-10 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Amna Accounting is poised to assist your business with its outsourced accounting, auditing, assurance, taxation and payroll needs. Our team of dedicated professionals provides an integrated service platform and knowledge base that provides the tools and know-how for your continued success, especially since we follow and comply with the International Standards of Auditing (ISA). We can provide our clients with business and corporate tax services through our strong pool of resources to seek long-term, value-driven relationships with our clients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are an audit firm that was founded by a Qatari woman, with more than 15 years of experience in auditing and other financial work, specifically to do with oil and gas. We are committed to delivering the best service for our customers and building relationships with them. The firm specialize in business advisory and consultation, tax planning and accounting and auditing services.
                </p>
              </div>
              <div className="pt-4">
                <div className="inline-flex items-center space-x-4">
                  <div className="h-1 w-20 bg-[#5616b3]"></div>
                  <span className="text-[#5616b3] font-semibold">Excellence in Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional audit and assurance services that empower businesses 
                to make informed decisions and maintain the highest standards of financial 
                integrity and compliance.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted name in audit services, known for our commitment 
                to excellence, integrity, and innovative solutions that drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "John Smith",
                position: "Managing Partner"
              },
              {
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Sarah Johnson",
                position: "Audit Director"
              },
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Michael Brown",
                position: "Technical Partner"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;