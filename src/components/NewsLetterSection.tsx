
const Newsletter = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8 relative bg-gradient-to-br from-[#1ee19b] to-[#0d3b3bcc] rounded-3xl p-4 overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-[#1ee19b]/12 transition-all duration-500">
        
        {/* Text */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl md:px-8 text-left">
            Start Creating Stunning <br /> Products Photos Today.
          </h2>
        </div>

        {/* Arrow Animation */}
        <div className="w-full h-32 md:w-48 md:h-48 col-span-1 md:transform md:translate-x-3/4">
          <div className="w-full h-full border-2 border-gray-900 rounded-2xl relative overflow-hidden">
            
            {/* Arrow 1 */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0">
              <i className="fa-solid fa-arrow-up-long rotate-45 text-5xl"></i>
            </div>
            
            {/* Arrow 2 */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
              <i className="fa-solid fa-arrow-up-long rotate-45 text-5xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
