export default function EgyCarWebsite() {
  const services = [
    'Luxury Cars',
    'Sports Cars',
    'Car Rental',
    'VIP Delivery',
  ]

  const testimonials = [
    {
      name: 'Mohamed Ali',
      text: 'Best luxury car experience in Egypt. Professional service and amazing cars.',
    },
    {
      name: 'Omar Khaled',
      text: 'The website design and booking process are smooth and premium.',
    },
    {
      name: 'Youssef Ahmed',
      text: 'Top quality vehicles and very respectful customer support.',
    },
  ]

  const brands = ['BMW', 'Mercedes', 'Audi', 'Porsche', 'Ferrari', 'Lamborghini']

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10 backdrop-blur-md sticky top-0 bg-black/80 z-50 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center text-xl font-bold">
            E
          </div>
          <h1 className="text-2xl font-bold tracking-wide">EgyCar</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#cars" className="hover:text-white transition">Cars</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="border border-white/10 hover:border-white/30 transition px-5 py-2 rounded-xl font-semibold">
            العربية
          </button>

          <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-xl font-semibold shadow-lg shadow-red-600/30">
            Login
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-red-600 text-center py-2 text-sm font-semibold tracking-wide">
        🔥 Special Offer: Get 15% OFF On VIP Rentals This Week
      </div>

      <section
        id="home"
        className="relative overflow-hidden px-8 lg:px-20 py-20 lg:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent blur-3xl" />

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-red-500 uppercase tracking-[6px] mb-4 text-sm font-semibold">
              Premium Car Experience
            </p>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Drive The <span className="text-red-600">Future</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 mb-8 max-w-xl">
              Luxury cars, modern design, and the best automotive experience in Egypt.
              Discover powerful performance with premium style.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-red-600 hover:bg-red-700 px-7 py-4 rounded-2xl font-bold transition shadow-2xl shadow-red-600/30">
                Explore Cars
              </button>

              <button className="border border-white/20 hover:border-white/40 px-7 py-4 rounded-2xl font-bold transition">
                Watch Video
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-zinc-900/80 border border-white/10 p-4 rounded-2xl text-center backdrop-blur-xl">
                <h4 className="text-2xl font-black text-red-500">4.9</h4>
                <p className="text-gray-400 text-sm">Rating</p>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 p-4 rounded-2xl text-center backdrop-blur-xl">
                <h4 className="text-2xl font-black text-red-500">24/7</h4>
                <p className="text-gray-400 text-sm">Support</p>
              </div>

              <div className="bg-zinc-900/80 border border-white/10 p-4 rounded-2xl text-center backdrop-blur-xl">
                <h4 className="text-2xl font-black text-red-500">VIP</h4>
                <p className="text-gray-400 text-sm">Service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury Car"
              className="rounded-[40px] shadow-2xl border border-white/10"
            />

            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
              <h3 className="text-3xl font-black text-red-500">500+</h3>
              <p className="text-gray-400">Premium Cars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 lg:px-20 py-10">
        <div className="overflow-hidden mb-10 border-y border-white/10 py-5">
          <div className="flex gap-10 whitespace-nowrap text-2xl font-black text-white/70 animate-pulse overflow-x-auto no-scrollbar">
            {brands.map((brand, index) => (
              <span key={index}>{brand}</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: '500+', label: 'Luxury Cars' },
            { number: '10K+', label: 'Clients' },
            { number: '24/7', label: 'Support' },
            { number: '15+', label: 'Awards' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-black text-red-500 mb-3">
                {item.number}
              </h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-8 lg:px-20 py-20">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[5px] text-sm mb-4">
            Our Services
          </p>

          <h3 className="text-5xl font-black mb-6">
            Premium Automotive Solutions
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 text-lg">
            We provide high-end automotive services with modern technology and luxury experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                {index + 1}
              </div>

              <h4 className="text-2xl font-bold mb-4">{service}</h4>

              <p className="text-gray-400 leading-7">
                Professional service with luxury quality and full customer support.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cars Section */}
      <section id="cars" className="px-8 lg:px-20 py-20 bg-zinc-950">
        <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="text-red-500 uppercase tracking-[5px] text-sm mb-3">
              Featured Cars
            </p>
            <h3 className="text-4xl font-black">Top Collection</h3>
          </div>

          <button className="border border-white/10 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            View All
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <button className="bg-red-600 px-6 py-3 rounded-xl font-bold">
            All Cars
          </button>

          <button className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl hover:border-red-500 transition">
            Sports
          </button>

          <button className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl hover:border-red-500 transition">
            Luxury
          </button>

          <button className="bg-zinc-900 border border-white/10 px-6 py-3 rounded-xl hover:border-red-500 transition">
            SUV
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              name: 'Mercedes AMG GT',
              price: '$120,000',
              image:
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
            },
            {
              name: 'BMW M4 Competition',
              price: '$95,000',
              image:
                'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
            },
            {
              name: 'Audi R8',
              price: '$140,000',
              image:
                'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop',
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-[30px] overflow-hidden hover:scale-[1.02] transition duration-300 shadow-2xl"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                  Available Now
                </div>

                <img
                  src={car.image}
                  alt={car.name}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold">{car.name}</h4>
                  <span className="text-red-500 font-bold">{car.price}</span>
                </div>

                <p className="text-gray-400 leading-7 mb-6">
                  High performance engine with luxurious interior and advanced technology.
                </p>

                <div className="flex items-center justify-between mb-5 text-sm text-gray-400">
                  <span>Automatic</span>
                  <span>2026</span>
                  <span>Petrol</span>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-bold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1600&auto=format&fit=crop"
              alt="Showroom"
              className="rounded-[40px] border border-white/10"
            />
          </div>

          <div>
            <p className="text-red-500 uppercase tracking-[5px] text-sm mb-4">
              About Us
            </p>

            <h3 className="text-5xl font-black leading-tight mb-8">
              The Best Car Platform In Egypt
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-8">
              EgyCar offers luxury vehicles with trusted quality, competitive prices,
              and premium customer service. We focus on elegance, speed, and modern
              automotive innovation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-900 border border-white/10 p-6 rounded-3xl">
                <h4 className="text-4xl font-black text-red-500 mb-2">10+</h4>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div className="bg-zinc-900 border border-white/10 p-6 rounded-3xl">
                <h4 className="text-4xl font-black text-red-500 mb-2">5K+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 lg:px-20 py-24">
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[5px] text-sm mb-4">
            Testimonials
          </p>

          <h3 className="text-5xl font-black mb-6">
            What Clients Say
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-[30px] p-8"
            >
              <div className="flex gap-1 text-yellow-400 text-2xl mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8 mb-8 text-lg">
                "{item.text}"
              </p>

              <div>
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p className="text-gray-500">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 lg:px-20 py-20 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-500 uppercase tracking-[5px] text-sm mb-4">
            Contact Us
          </p>

          <h3 className="text-5xl font-black mb-6">
            Let's Build Your Dream Car Experience
          </h3>

          <p className="text-gray-400 text-lg mb-10 leading-8">
            Reach us through WhatsApp or social media and start your luxury journey today.
          </p>

          <form className="bg-black border border-white/10 rounded-[30px] p-8 mb-12 text-left">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500 text-white"
              />
            </div>

            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500 mb-6 text-white"
            ></textarea>

            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl font-bold transition w-full md:w-auto">
              Send Message
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/201067178137"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/eslam__fat7i"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-2xl font-bold"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-8 lg:px-20 py-20">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-[40px] p-10 lg:p-16 text-center shadow-2xl shadow-red-600/20">
          <h3 className="text-4xl lg:text-6xl font-black mb-6">
            Ready To Drive Your Dream Car?
          </h3>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-8">
            Join thousands of luxury car lovers and experience premium performance with EgyCar.
          </p>

          <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 bg-black">
        © 2026 EgyCar — Designed By Eslam Fathi 👑
      </footer>
    </div>
  )
}
