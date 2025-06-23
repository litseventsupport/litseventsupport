import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HOME SECTION - Keep all existing styling unchanged */}
      <div className="w-full relative min-h-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Photo1.png in very top right corner with zero padding/margin */}
        <div className="absolute top-0 right-0 z-10 w-3/5">
          <Image
            src="/photo1.png"
            alt="Photo 1"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Header Menu Bar in top right area with 20% margin from top */}
        <div className="absolute top-[10%] right-4 z-20">
          <nav className="rounded-lg px-6 py-3 shadow-lg bg-[#ffaf5b]">
            <ul className="flex items-center space-x-6 text-sm font-bold">
              <li><a href="#" className="text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-black hover:text-white transition-colors">Project</a></li>
              <li><a href="#" className="text-black hover:text-white transition-colors">Booking</a></li>
              <li><a href="#" className="text-black hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-black hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-black hover:text-white transition-colors">Sign Up</a></li>
              <li><a href="#" className="text-black hover:text-white transition-colors">About Us</a></li>
              <li><span className="text-black font-bold">EN</span></li>
            </ul>
          </nav>
        </div>

        {/* Logo and Slogan on the left side, centered vertically */}
        <div className="relative left-0 top-0 z-10 flex flex-col items-start pt-[10vw]">
          {/* Logo */}
          <div className="w-[20vw] ml-[15vw] mb-[2vw]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={400}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Slogan */}
          <div className="w-[40vw] ml-[0] mt-4">
            <Image
              src="/slogan1.png"
              alt="Slogan"
              width={500}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Big Quote and Descriptive Text Side by Side */}
          <div className="flex items-start w-[40vw] ml-[15vw] mt-4">
            {/* Very Big Quote */}
            <div className="text-white text-[8vw] font-bold leading-none">
              &ldquo;
            </div>

            {/* Descriptive Text */}
            <p className="text-white text-[1.8vw] leading-relaxed font-medium ml-4">
              Bikin acara event kamu<br />
              makin seru dan berkesan<br />
              bareng Lits Event Support<br />
              Kami siap bantu dari awal<br />
              sampai acara selesai, tanpa<br />
              ribet!
            </p>
          </div>
        </div>
      </div>

      {/* NEW SECTION - TOP SELLING & NEWS with background continuation */}
      <div className="w-full relative min-h-screen h-fit bg-cover bg-center bg-no-repeat pt-[20vw]" style={{ backgroundImage: "url('/background.png')" }}>
        {/* TOP SELLING Section */}
        <section className="text-[#ffaf5b] text-center py-12 pt-40">
          <h2 className="text-xl font-bold text-center">TOP SELLING</h2>
          <h2 className="text-4xl font-bold text-center">NEWS</h2>

          {/* News Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-4 flex flex-col h-full">
              <Image
                src="/news-card1.png"
                alt="Backdrop Board"
                width={400}
                height={300}
                className="w-full h-auto object-cover p-4"
              />
              <div className="p-6">
                <h3 className="text-black text-lg font-bold text-left">Backdrop Board</h3>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/logo-wa-black.png"
                    alt="WhatsApp Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-600 text-sm">2 - 3 Day Progress</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-4 flex flex-col h-full">
              <Image
                src="/news-card2.png"
                alt="Mini Garden"
                width={400}
                height={300}
                className="w-full h-auto object-cover p-4"
              />
              <div className="p-6">
                <h3 className="text-black text-lg font-bold text-left">Mini Garden</h3>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/logo-wa-black.png"
                    alt="WhatsApp Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-600 text-sm">1 - 2 Day Progress</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-4 flex flex-col h-full">
              <Image
                src="/news-card3.png"
                alt="Tenda Komersil"
                width={400}
                height={300}
                className="w-full h-auto object-cover p-4"
              />
              <div className="p-6">
                <h3 className="text-black text-lg font-bold text-left">Tenda Komersil</h3>
                <div className="flex justify-between items-center mt-2">
                  <Image
                    src="/logo-wa-black.png"
                    alt="WhatsApp Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-600 text-sm">2 - 3 Day Progress</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION - Take it Easy */}
        <section className="text-white py-12 mt-16">
          <div className="flex justify-between items-start px-8">
            {/* Left Side - Text and Process Steps */}
            <div className="w-1/2 ml-[15vw]">
              {/* Take it Easy text */}
              <h2 className="text-[#ffaf5b] text-xl font-bold text-left mb-4">Take it Easy</h2>
              
              {/* We're ready to Support your Event - Made bigger */}
              <h3 className="text-white text-6xl font-bold text-left mb-8 leading-tight">
                We&apos;re ready<br />
                to Support<br />
                your Event
              </h3>

              {/* Process Steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-center space-x-6">
                  <Image
                    src="/chose-planning.png"
                    alt="Choose Planning"
                    width={800}
                    height={800}
                    className="w-[5vw] h-[5vw] object-fill"
                  />
                  <span className="text-white text-xl font-medium">Chose Planning</span>
                </div>

                {/* Step 2 */}
                <div className="flex items-center space-x-6">
                  <Image
                    src="/make-payment.png"
                    alt="Make Payment"
                    width={80}
                    height={80}
                    className="w-[5vw] h-[5vw] object-contain"
                  />
                  <span className="text-white text-xl font-medium">Make Payment</span>
                </div>

                {/* Step 3 */}
                <div className="flex items-center space-x-6">
                  <Image
                    src="/goto-event.png"
                    alt="Go To Event"
                    width={80}
                    height={80}
                    className="w-[5vw] h-[5vw] object-contain"
                  />
                  <span className="text-white text-xl font-medium">Go To Event!</span>
                </div>
              </div>
            </div>

            {/* Right Side - Chair Image */}
            <div className="flex flex-col items-center ">
              {/* Chair Image */}
              <div className="mb-8">
                <Image
                  src="/chair.png"
                  alt="Chair"
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-contain "
                />
              </div>
            </div>
          </div>
          
          {/* Contact Us Button - Centered under chair and go to event */}
          <div className="flex justify-center mt-12">
            <div className="bg-[#ffaf5b] rounded-lg px-8 py-4 flex items-center space-x-3 cursor-pointer hover:bg-opacity-90 transition-all">
              <Image
                src="/logo-wa-color.png"
                alt="WhatsApp Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white font-bold text-lg">Contact Us</span>
            </div>
          </div>
        </section>

        {/* NEW SECTION - Founder Speech */}
        <section className="text-white py-12 mt-16">
          <div className="flex justify-between items-start px-8">
            {/* Left Column - Content */}
            <div className="w-1/2 ml-[15vw]">
              {/* Logo */}
              <div className="w-[15vw] mb-6">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Founder Speech Title */}
              <h2 className="text-[#ffaf5b] text-4xl font-bold text-left mb-8">Founder Speech</h2>
              
              {/* Quote */}
              <p className="text-white text-lg leading-relaxed mb-12">
                On the Windows Talking painted pasture yet its<br />
                express parties use. Sure last upon he same as knew next.<br />
                Of belived or diverted no.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-12">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/email.png"
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-white text-base">connect@limaempat.com</span>
                </div>

                {/* Website */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/website.png"
                    alt="Website Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-white text-base">www.limaempatproduction.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Image
                    src="/phone.png"
                    alt="Phone Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-white text-base">( +62 ) 8569-4373-338</span>
                </div>
              </div>

              {/* Name and Title */}
              <div>
                <h3 className="text-white text-3xl font-bold mb-2">Sandika</h3>
                <p className="text-[#ffaf5b] text-xl font-medium">CEO Lits Group</p>
              </div>
            </div>

            {/* Right Column - Founder Image */}
            <div className="w-1/2 flex justify-center">
              <div className="w-full max-w-lg">
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
        <section className="text-white py-12 mt-16">
          <div className="px-8">
            {/* Left Column - Content */}
            <div className="ml-[15vw] max-w-4xl">
              {/* Logo */}
              <div className="w-[15vw] mb-6">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* About Section */}
              <div className="mb-12">
                {/* About Title */}
                <h2 className="text-[#ffde59] text-3xl font-bold text-left mb-4">About</h2>
                
                {/* Lits Event Support Title */}
                <h3 className="text-white text-6xl font-bold text-left mb-6 leading-tight">
                  Lits Event Support
                </h3>

                {/* About Description */}
                <p className="text-white text-lg leading-relaxed mb-12">
                  adalah sebuah Unit perusahaan dari PT Limaempat Semar Jaya yang bergerak di bidang kebutuhan pendukung
                  event.
                </p>
              </div>

              {/* Company History Section */}
              <div>
                {/* Company History Title */}
                <h2 className="text-[#ffde59] text-3xl font-bold text-left mb-4">Company History</h2>
                
                {/* Company History Description */}
                <p className="text-white text-base leading-relaxed">
                  berawal dari Limaempat Production yang merupakan unit bisnis PT Limaempat Semar Jaya bergerak di bidang<br />
                  audio visual production. dengan mengintegrasikan Limaempat Production dan Lits Event Support sehingga dari<br />
                  konsep digital proses realisasi dari event support agar mengurangi tingkat kekurangan realisasi dalam konsep<br />
                  digital.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* NEW SECTION - Visi Misi with dual background */}
      <div className="w-full relative min-h-screen h-fit bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Second background overlay */}
        <div className="w-full relative min-h-screen h-fit bg-cover bg-center bg-no-repeat pb-16" style={{ backgroundImage: "url('/background2.png')" }}>
          <section className="text-white py-12">
            {/* Top left logo */}
            <div className="ml-[15vw] pt-32 mb-8">
              <div className="w-[15vw]">
                <Image
                  src="/logo-black.png"
                  alt="Logo Black"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-start">
              {/* Left Side - Content Box */}
              <div className="w-[60%] relative">
                {/* Content Box with background */}
                <div className="bg-[#333333] border-2 border-white rounded-lg pt-8 relative z-10 ml-0">
                  {/* Soundsystem icon and content */}
                  <div className="flex items-end space-x-6">
                    <div className="flex-shrink-0 h-[500px]">
                      <Image
                        src="/soundsystem.png"
                        alt="Sound System"
                        width={120}
                        height={350}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 pb-8">
                      {/* Visi Section */}
                      <div className="mb-8">
                        <h3 className="text-[#ffaf5b] text-2xl font-bold mb-4">Visi</h3>
                        <p className="text-white text-base leading-relaxed mb-6">
                          menjadi perusahaan yang berdampak positif bagi seluruh stakeholder
                          mulai dari klien sampai team ahli kami
                        </p>
                      </div>

                      {/* Misi Section */}
                      <div className="mb-8">
                        <h3 className="text-[#ffaf5b] text-2xl font-bold mb-4">Misi</h3>
                        <p className="text-white text-base leading-relaxed mb-6">
                          memiliki jaminan kepercayaan yang tertulis dan tertata<br />
                          Jaminan Realisasi sesuai dengan informasi yang di sampaikan saat<br />
                          Konsep diskusi menjadi hal utama bagi kami
                        </p>
                      </div>

                      {/* Our Value Section */}
                      <div>
                        <h3 className="text-[#ffaf5b] text-2xl font-bold mb-4">Our Value</h3>
                        <p className="text-white text-base leading-relaxed">
                          korelasi limaempat production dan Lits Event Support menjadi<br />
                          keunggulan terintegrasi konsep digital dan realisasi Event dengan<br />
                          Team Ahli di bidangnya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Photo1 */}
              <div className="w-1/2 flex justify-center">
                <div className="w-full max-w-lg">
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
      <div className="w-full relative min-h-screen h-[90vw] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')" }}>
        {/* Background3 overlay */}
        <div className="w-full relative min-h-screen h-[120%] bg-cover bg-center bg-no-repeat py-12" style={{ backgroundImage: "url('/background3.png')" }}>
          <section className="text-white">
            {/* Top left logo */}
            <div className="ml-[15vw] pt-8 mb-8">
              <div className="w-[15vw]">
                <Image
                  src="/logo-black.png"
                  alt="Logo Black"
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Service Content */}
            <div className="ml-[15vw] max-w-4xl">
              {/* Service Title */}
              <h2 className="text-[#ffaf5b] text-4xl font-bold text-left mb-8">Service</h2>
              
              {/* Service List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-lg">Bangku Futura</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-lg">Backdrop</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-lg">Mistyfan</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-lg">Dll Sebagainya keperluan Event</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* NEW SECTION - Our Client */}
      <div className="w-full relative min-h-screen h-fit">
        <Image
          src="/ourclient.png"
          alt="Our Client"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
