
const SectionDivider = () => {
  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#5616b3]/20" />
          <div className="w-1 h-1 rounded-full bg-[#5616b3]/30" />
          <div className="w-0.5 h-0.5 rounded-full bg-[#5616b3]/40" />
          <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
