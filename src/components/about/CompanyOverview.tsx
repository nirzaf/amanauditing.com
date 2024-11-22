const CompanyOverview = () => {
  return (
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
  );
};

export default CompanyOverview;
