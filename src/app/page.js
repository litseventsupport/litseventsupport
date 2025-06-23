'use client';
import Image from "next/image";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lits Event Support",
    "image": "https://litsevent.com/logo.png",
    "description": "Professional event organizer dan audio visual services dengan pengalaman lebih dari 5 tahun",
    "url": "https://litsevent.com",
    "telephone": "+62-8569-4373-338",
    "email": "connect@limaempat.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2,
      "longitude": 106.8
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Event Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Planning & Management"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Sound System & Audio Visual"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Backdrop Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lighting & Decoration"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Add smooth scrolling behavior */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      {/* HOME SECTION - Keep all existing styling unchanged */}
      <main>
      <section id="home" className="w-full relative min-h-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Photo1.png in very top right corner with zero padding/margin */}
        <div className="absolute top-0 right-0 z-10 w-3/5">
          <Image
            src="/photo1.png"
            alt="Lits Event Support - Professional Event Organizer Team"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Header Menu Bar in top right area with 20% margin from top */}
        <header className="absolute top-[10%] right-2 md:right-4 z-20 w-full md:w-auto">
          <nav className="rounded-lg px-3 md:px-6 py-2 md:py-3 shadow-lg bg-[#ffaf5b] mx-2 md:mx-0" role="navigation" aria-label="Main navigation">
            <ul className="hidden md:flex items-center space-x-6 text-sm font-bold">
              <li><a href="#home" className="text-white transition-colors hover:underline" aria-label="Go to home section">Home</a></li>
              <li><a href="#news" className="text-black hover:text-white transition-colors" aria-label="Go to news section">Project</a></li>
              <li><a href="#services" className="text-black hover:text-white transition-colors" aria-label="Go to services section">Booking</a></li>
              <li><a href="#services" className="text-black hover:text-white transition-colors" aria-label="Go to services section">Services</a></li>
              <li><a href="#founder" className="text-black hover:text-white transition-colors" aria-label="Go to contact section">Contact Us</a></li>
              <li><a href="#about" className="text-black hover:text-white transition-colors" aria-label="Go to about section">Sign Up</a></li>
              <li><a href="#about" className="text-black hover:text-white transition-colors" aria-label="Go to about section">About Us</a></li>
              <li><span className="text-black font-bold">EN</span></li>
            </ul>
            {/* Mobile menu - full width centered */}
            <div className="md:hidden flex items-center justify-center space-x-4 text-sm font-bold w-full">
              <a href="#home" className="text-white hover:underline transition-colors" aria-label="Go to home section">Home</a>
              <a href="#news" className="text-black hover:text-white transition-colors" aria-label="Go to news section">News</a>
              <a href="#services" className="text-black hover:text-white transition-colors" aria-label="Go to services section">Services</a>
              <a href="#founder" className="text-black hover:text-white transition-colors" aria-label="Go to contact section">Contact</a>
              <a href="#about" className="text-black hover:text-white transition-colors" aria-label="Go to about section">About</a>
            </div>
          </nav>
        </header>

        {/* Logo and Slogan on the left side, centered vertically */}
        <div className="relative left-0 top-0 z-10 flex flex-col items-start pt-[45vw] md:pt-[10vw]">
          {/* Logo */}
          <div className="w-[35vw] md:w-[20vw] ml-[8vw] md:ml-[15vw] mb-[3vw] md:mb-[2vw]">
            <Image
              src="/logo.png"
              alt="Lits Event Support Logo - Professional Event Organizer"
              width={400}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Slogan */}
          <div className="w-[60vw] md:w-[40vw] ml-[2vw] md:ml-[0] mt-2 md:mt-4">
            <Image
              src="/slogan1.png"
              alt="Lits Event Support Slogan - Bikin event kamu makin seru"
              width={500}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Big Quote and Descriptive Text Side by Side */}
          <div className="flex items-start w-[85vw] md:w-[40vw] ml-[8vw] md:ml-[15vw] mt-4">
            {/* Very Big Quote */}
            <div className="text-white text-[12vw] md:text-[8vw] font-bold leading-none" aria-hidden="true">
              &ldquo;
            </div>

            {/* Descriptive Text */}
            <h1 className="text-white text-[3.5vw] md:text-[1.8vw] leading-relaxed font-medium ml-2 md:ml-4">
              Bikin acara event kamu<br />
              makin seru dan berkesan<br />
              bareng Lits Event Support<br />
              Kami siap bantu dari awal<br />
              sampai acara selesai, tanpa<br />
              ribet!
            </h1>
          </div>
        </div>
      </section>

      {/* NEW SECTION - TOP SELLING & NEWS with background continuation */}
      <section id="news" className="w-full relative min-h-screen h-fit bg-cover bg-center bg-no-repeat pt-[25vw] md:pt-[20vw]" style={{ backgroundImage: "url('/background.png')" }}>
        {/* TOP SELLING Section */}
        <article className="text-[#ffaf5b] text-center py-8 md:py-12 pt-20 md:pt-40">
          <h2 className="text-lg md:text-xl font-bold text-center">TOP SELLING</h2>
          <h2 className="text-2xl md:text-4xl font-bold text-center">NEWS</h2>

          {/* News Cards */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8" role="list">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 md:mx-4 my-2 md:my-4 flex flex-col h-full" role="listitem">
              <Image
                src="/news-card1.png"
                alt="Backdrop Board - Layanan backdrop profesional untuk event"
                width={400}
                height={300}
                className="w-full h-auto object-cover p-2 md:p-4"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-black text-base md:text-lg font-bold text-left">Backdrop Board</h3>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/logo-wa-black.png"
                    alt="WhatsApp Contact Icon"
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-gray-600 text-xs md:text-sm">2 - 3 Day Progress</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 md:mx-4 my-2 md:my-4 flex flex-col h-full" role="listitem">
              <Image
                src="/news-card2.png"
                alt="Mini Garden - Dekorasi taman mini untuk event outdoor"
                width={400}
                height={300}
                className="w-full h-auto object-cover p-2 md:p-4"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-black text-base md:text-lg font-bold text-left">Mini Garden</h3>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/logo-wa-black.png"
                    alt="WhatsApp Contact Icon"
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-gray-600 text-xs md:text-sm">1 - 2 Day Progress</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 md:mx-4 my-2 md:my-4 flex flex-col h-full" role="listitem">
              <Image
                src="/news-card3.png"
                alt="Tenda Komersil - Tenda berkualitas untuk event komersial"
                width={400}
                height={300}
                className="w-full h-auto object-cover p-2 md:p-4"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-black text-base md:text-lg font-bold text-left">Tenda Komersil</h3>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/logo-wa-black.png"
                    alt="WhatsApp Contact Icon"
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-gray-600 text-xs md:text-sm">2 - 3 Day Progress</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* NEW SECTION - Take it Easy */}
        <section className="text-white py-8 md:py-12 mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8">
            {/* Left Side - Text and Process Steps */}
            <div className="w-full md:w-1/2 ml-[5vw] md:ml-[15vw] mb-8 md:mb-0">
              {/* Take it Easy text */}
              <h2 className="text-[#ffaf5b] text-lg md:text-xl font-bold text-left mb-4">Take it Easy</h2>
              
              {/* We're ready to Support your Event - Made bigger */}
              <h3 className="text-white text-4xl md:text-6xl font-bold text-left mb-6 md:mb-8 leading-tight">
                We&apos;re ready<br />
                to Support<br />
                your Event
              </h3>

              {/* Process Steps */}
              <div className="space-y-6 md:space-y-8">
                {/* Step 1 */}
                <div className="flex items-center space-x-4 md:space-x-6">
                  <Image
                    src="/chose-planning.png"
                    alt="Choose Planning"
                    width={800}
                    height={800}
                    className="w-[8vw] md:w-[5vw] h-[8vw] md:h-[5vw] object-fill"
                  />
                  <span className="text-white text-lg md:text-xl font-medium">Chose Planning</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-4 md:space-x-6">
                  <Image
                    src="/make-payment.png"
                    alt="Make Payment"
                    width={80}
                    height={80}
                    className="w-[8vw] md:w-[5vw] h-[8vw] md:h-[5vw] object-contain"
                  />
                  <span className="text-white text-lg md:text-xl font-medium">Make Payment</span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-4 md:space-x-6">
                  <Image
                    src="/goto-event.png"
                    alt="Go To Event"
                    width={80}
                    height={80}
                    className="w-[8vw] md:w-[5vw] h-[8vw] md:h-[5vw] object-contain"
                  />
                  <span className="text-white text-lg md:text-xl font-medium">Go To Event!</span>
                </div>
              </div>
            </div>

            {/* Right Side - Chair Image */}
            <div className="flex flex-col items-center w-full md:w-auto">
              {/* Chair Image */}
              <div className="mb-6 md:mb-8">
                <Image
                  src="/chair.png"
                  alt="Chair"
                  width={1200}
                  height={1200}
                  className="w-[60vw] md:w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Contact Us Button - Centered under chair and go to event */}
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="bg-[#ffaf5b] rounded-lg px-6 md:px-8 py-3 md:py-4 flex items-center space-x-3 cursor-pointer hover:bg-opacity-90 transition-all">
              <Image
                src="/logo-wa-color.png"
                alt="WhatsApp Logo"
                width={24}
                height={24}
                className="w-5 md:w-6 h-5 md:h-6"
              />
              <span className="text-white font-bold text-base md:text-lg">Contact Us</span>
            </div>
          </div>
        </section>

        {/* NEW SECTION - Founder Speech */}
        <section id="founder" className="text-white py-8 md:py-12 mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row justify-between items-start px-4 md:px-8">
            {/* Left Column - Content */}
            <div className="w-full md:w-1/2 ml-[5vw] md:ml-[15vw] mb-8 md:mb-0">
              {/* Logo */}
              <div className="w-[20vw] md:w-[15vw] mb-4 md:mb-6">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Founder Speech Title */}
              <h2 className="text-[#ffaf5b] text-2xl md:text-4xl font-bold text-left mb-6 md:mb-8">Founder Speech</h2>
              
              {/* Quote */}
              <p className="text-white text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                On the Windows Talking painted pasture yet its<br />
                express parties use. Sure last upon he same as knew next.<br />
                Of belived or diverted no.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/email.png"
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-white text-sm md:text-base">connect@limaempat.com</span>
                </div>

                {/* Website */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/website.png"
                    alt="Website Icon"
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-white text-sm md:text-base">www.limaempatproduction.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/phone.png"
                    alt="Phone Icon"
                    width={24}
                    height={24}
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-white text-sm md:text-base">( +62 ) 8569-4373-338</span>
                </div>
              </div>

              {/* Name and Title */}
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Sandika</h3>
                <p className="text-[#ffaf5b] text-lg md:text-xl font-medium">CEO Lits Group</p>
              </div>
            </div>

            {/* Right Column - Founder Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-sm md:max-w-lg">
                <Image
                  src="/founder.png"
                  alt="Founder"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION - About */}
        <section id="about" className="text-white py-8 md:py-12 mt-8 md:mt-16">
          <div className="px-4 md:px-8">
            {/* Left Column - Content */}
            <div className="ml-[5vw] md:ml-[15vw] max-w-4xl">
              {/* Logo */}
              <div className="w-[20vw] md:w-[15vw] mb-4 md:mb-6">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* About Section */}
              <div className="mb-8 md:mb-12">
                {/* About Title */}
                <h2 className="text-[#ffde59] text-2xl md:text-3xl font-bold text-left mb-3 md:mb-4">About</h2>
                
                {/* Lits Event Support Title */}
                <h3 className="text-white text-4xl md:text-6xl font-bold text-left mb-4 md:mb-6 leading-tight">
                  Lits Event Support
                </h3>

                {/* About Description */}
                <p className="text-white text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                  adalah sebuah Unit perusahaan dari PT Limaempat Semar Jaya yang bergerak di bidang kebutuhan pendukung
                  event.
                </p>
              </div>

              {/* Company History Section */}
              <div>
                {/* Company History Title */}
                <h2 className="text-[#ffde59] text-2xl md:text-3xl font-bold text-left mb-3 md:mb-4">Company History</h2>
                
                {/* Company History Description */}
                <p className="text-white text-sm md:text-base leading-relaxed">
                  berawal dari Limaempat Production yang merupakan unit bisnis PT Limaempat Semar Jaya bergerak di bidang<br className="hidden md:block" />
                  audio visual production. dengan mengintegrasikan Limaempat Production dan Lits Event Support sehingga dari<br className="hidden md:block" />
                  konsep digital proses realisasi dari event support agar mengurangi tingkat kekurangan realisasi dalam konsep<br className="hidden md:block" />
                  digital.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* NEW SECTION - Visi Misi with dual background */}
      <div className="w-full relative min-h-screen h-fit bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Second background overlay */}
        <div className="w-full relative min-h-screen h-fit bg-cover bg-center bg-no-repeat pb-8 md:pb-16" style={{ backgroundImage: "url('/background2.png')" }}>
          <section className="text-white py-8 md:py-12">
            {/* Top left logo */}
            <div className="ml-[5vw] md:ml-[15vw] pt-16 md:pt-32 mb-6 md:mb-8">
              <div className="w-[20vw] md:w-[15vw]">
                <Image
                  src="/logo-black.png"
                  alt="Logo Black"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Left Side - Content Box */}
              <div className="w-full md:w-[60%] relative px-4 md:px-0">
                {/* Content Box with background */}
                <div className="bg-[#333333] border-2 border-white rounded-lg p-4 md:pt-8 relative z-10 ml-0">
                  {/* Soundsystem icon and content */}
                  <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0 h-32 md:h-[500px] flex justify-center md:block">
                      <Image
                        src="/soundsystem.png"
                        alt="Sound System"
                        width={120}
                        height={350}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 pb-4 md:pb-8">
                      {/* Visi Section */}
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-[#ffaf5b] text-lg md:text-2xl font-bold mb-2 md:mb-4">Visi</h3>
                        <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                          menjadi perusahaan yang berdampak positif bagi seluruh stakeholder
                          mulai dari klien sampai team ahli kami
                        </p>
                      </div>

                      {/* Misi Section */}
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-[#ffaf5b] text-lg md:text-2xl font-bold mb-2 md:mb-4">Misi</h3>
                        <p className="text-white text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                          memiliki jaminan kepercayaan yang tertulis dan tertata<br className="hidden md:block" />
                          Jaminan Realisasi sesuai dengan informasi yang di sampaikan saat<br className="hidden md:block" />
                          Konsep diskusi menjadi hal utama bagi kami
                        </p>
                      </div>

                      {/* Our Value Section */}
                      <div>
                        <h3 className="text-[#ffaf5b] text-lg md:text-2xl font-bold mb-2 md:mb-4">Our Value</h3>
                        <p className="text-white text-sm md:text-base leading-relaxed">
                          korelasi limaempat production dan Lits Event Support menjadi<br className="hidden md:block" />
                          keunggulan terintegrasi konsep digital dan realisasi Event dengan<br className="hidden md:block" />
                          Team Ahli di bidangnya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Photo1 */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <div className="w-full max-w-sm md:max-w-lg">
                  <Image
                    src="/photo1.png"
                    alt="Photo 1"
                    width={600}
                    height={800}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* NEW SECTION - Service with dual background */}
      <section id="services" className="w-full relative min-h-screen h-[90vw] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Background3 overlay */}
        <div className="w-full relative min-h-screen h-[120%] bg-cover bg-center bg-no-repeat py-8 md:py-12" style={{ backgroundImage: "url('/background3.png')" }}>
          <article className="text-white">
            {/* Top left logo */}
            <div className="ml-[5vw] md:ml-[15vw] pt-4 md:pt-8 mb-6 md:mb-8">
              <div className="w-[20vw] md:w-[15vw]">
                <Image
                  src="/logo-black.png"
                  alt="Lits Event Support Logo"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Service Content */}
            <div className="ml-[5vw] md:ml-[15vw] max-w-4xl">
              {/* Service Title */}
              <h2 className="text-[#ffaf5b] text-2xl md:text-4xl font-bold text-left mb-6 md:mb-8">Service</h2>
              
              {/* Service List */}
              <ul className="space-y-3 md:space-y-4" role="list">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                  <span className="text-white text-base md:text-lg">Bangku Futura</span>
                </li>
                
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                  <span className="text-white text-base md:text-lg">Backdrop</span>
                </li>
                
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                  <span className="text-white text-base md:text-lg">Mistyfan</span>
                </li>
                
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full" aria-hidden="true"></div>
                  <span className="text-white text-base md:text-lg">Dll Sebagainya keperluan Event</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* NEW SECTION - Our Client */}
      <div className="w-full relative min-h-screen h-fit">
        <Image
          src="/ourclient.png"
          alt="Our Clients - Companies that trust Lits Event Support"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      </main>
    </>
  );
}
