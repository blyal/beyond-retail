const CTASection = () => {
  return (
    <section
      className="min-h-screen py-16 bg-center bg-cover bg-no-repeat text-center relative flex flex-col justify-between items-center px-4 md:px-0"
      style={{ backgroundImage: 'url("/beyond-mountains.png")' }}
    >
      <h3 className="text-3xl font-semibold text-white">
        Ready to take your project beyond?
      </h3>

      <div>
        <a
          href="/contact"
          className="bg-white text-black px-7 py-4 rounded-full font-semibold hover:bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] transition-all shadow-lg border border-white"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
};

export default CTASection;
