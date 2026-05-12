import { useState } from 'react';
import logo from '/src/assets/weblogowhite.png';
import favicon from '/src/assets/favicon.png';
import pastEventImg1 from '/src/assets/SID05786.jpg';
import pastEventImg2 from '/src/assets/SID05813.jpg';
import pastEventImg3 from '/src/assets/SID05676.jpg';
import pastEventImg4 from '/src/assets/SID05614.jpg';
import pastEventImg5 from '/src/assets/SID05543.jpg';
import pastEventImg6 from '/src/assets/pastimage6.jpg';
import pastEventImg7 from '/src/assets/SID05602.jpg';
import pastEventImg8 from '/src/assets/SID05715.jpg';
import pastEventImg9 from '/src/assets/SID05659.jpg';
import partnerWhe from '/src/assets/White - WHE.png';
import partnerRed from '/src/assets/redbull.png';
import partnerInferno from '/src/assets/inferno.jpg';
import partnerTkt from '/src/assets/tkthive.png';
import partnerInn from '/src/assets/innovxus.png';
import partnerInterview from '/src/assets/interviewbuddy.png';
import partnerDin from '/src/assets/dinexlogo.webp';
import partnerBridge from '/src/assets/bridgeNow.png';
import partnerAdv from '/src/assets/advitiya.png';
import partnerDriftX from '/src/assets/driftxlogo.jfif';
import upcomingDesktop from '/src/assets/desktopbanner1.png';
import upcomingMobile from '/src/assets/mobilebanner.png';

export default function VibrantaLiveWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl max-h-18 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-6 py-4 z-50 shadow-2xl">
        {/* Left: Logo */}
        <div className="flex items-center w-1/4">
          <img src={favicon} alt="Vibranta Live" className="md:hidden h-16 w-auto object-contain scale-[0.8] origin-left" />
          <img src={logo} alt="Vibranta Live" className="hidden md:block h-20 w-auto object-contain scale-[0.8] origin-left" />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center w-2/4 space-x-8 text-sm uppercase tracking-widest font-semibold text-zinc-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#partners" className="hover:text-white transition-colors">Partners</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex items-center justify-end w-1/4">
          <a href="#contact" className="hidden md:inline-block bg-[#ff5400] text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,84,0,0.3)]">
            Partner With Us
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-300 hover:text-white ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest font-black hover:text-zinc-300 transition-colors">Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest font-black hover:text-zinc-300 transition-colors">About</a>
          <a href="#events" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest font-black hover:text-zinc-300 transition-colors">Events</a>
          <a href="#brands" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest font-black hover:text-zinc-300 transition-colors">Brands</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl uppercase tracking-widest font-black hover:text-zinc-300 transition-colors">Contact</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 bg-[#ff5400] text-black px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,84,0,0.3)]">
            Partner With Us
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6" id="home">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-95"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto mt-5">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight uppercase leading-none">
            Vibranta <span className="text-[#ff5400]">Live</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            India’s next-generation entertainment & event management company.
            Creating unforgettable experiences through Concerts, EDM Festivals,
            DJ Nights, Fashion Shows, Corporate Entertainment & Live Experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#events" className="bg-[#ff5400] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_15px_rgba(255,84,0,0.5)] inline-block">
              Explore Events
            </a>

            <a href="#contact" className="border border-[#ff5400] text-[#ff5400] px-8 py-4 rounded-full font-semibold hover:bg-[#ff5400] hover:text-black transition duration-300 inline-block">
              Partner With Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#ff5400] text-sm tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* About */}
      <section className="py-28 px-6 border-t border-zinc-900" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              Built for <span className="text-[#ff5400]">Live Culture</span>
            </h2>

            <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
              Vibranta Live is the entertainment and event management division of
              LYNQUP PRIVATE LIMITED. We create high-energy experiences ranging
              from EDM festivals and artist-led concerts to fashion events,
              celebrity appearances, nightlife experiences, and premium corporate
              entertainment productions.
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              With properties like <span className="text-white font-semibold">GraveYard</span>
              {' '}and{' '}
              <span className="text-white font-semibold">RageX</span>, we focus on
              building youth-driven entertainment brands that redefine nightlife
              and experiential events in India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              "EDM Festivals",
              "Concerts",
              "DJ Nights",
              "Fashion Shows",
              "Celebrity Shows",
              "Corporate Events",
            ].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-[#ff5400] hover:shadow-[0_0_15px_rgba(255,84,0,0.15)] transition duration-300 group cursor-default"
              >
                <h3 className="text-2xl font-bold group-hover:text-[#ff5400] transition-colors">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-28 px-6 bg-black border-t border-zinc-900" id="events">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Event <span className="text-[#ff5400]">Gallery</span>
            </h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              A glimpse into our high-energy experiences. Relive the madness of our past events and get ready for what's coming next.
            </p>
          </div>

          <div className="space-y-24">
            {/* Upcoming Event */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-black uppercase">Coming Next August</h3>
                <div className="h-[1px] flex-1 bg-zinc-800"></div>
                <span className="text-[#ff5400] font-bold tracking-widest text-sm uppercase">Upcoming</span>
              </div>
              <div className="aspect-[21/9] md:aspect-[21/7] border border-zinc-800 rounded-3xl flex flex-col items-center justify-center group relative overflow-hidden bg-black">
                <img src={upcomingMobile} alt="Upcoming Event" className="w-full h-full object-cover md:hidden group-hover:scale-105 transition-transform duration-700" />
                <img src={upcomingDesktop} alt="Upcoming Event" className="w-full h-full object-cover hidden md:block group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>

            {/* Past Event */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-black uppercase">GraveYard First Edition</h3>
                <div className="h-[1px] flex-1 bg-zinc-800"></div>
                <span className="text-zinc-500 font-bold tracking-widest text-sm uppercase">Past</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[{ id: 1, src: pastEventImg1 }, { id: 2, src: pastEventImg2 }, { id: 3, src: pastEventImg3 }, { id: 4, src: pastEventImg4 }, { id: 5, src: pastEventImg5 }, { id: 6, src: pastEventImg6 }, { id: 7, src: pastEventImg7 }, { id: 8, src: pastEventImg8 }, { id: 9, src: pastEventImg9 }].map((item) => (
                  <div key={item.id} className={`bg-zinc-900 border border-zinc-800 rounded-2xl aspect-square flex items-center justify-center overflow-hidden hover:border-[#ff5400] transition-colors cursor-pointer group relative ${item.id === 1 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                    {item.src ? (
                      <img src={item.src} alt={`Past Event Photo ${item.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <span className="text-zinc-700 text-sm uppercase font-bold tracking-widest group-hover:text-[#ff5400]">Photo {item.id}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-28 px-6 bg-zinc-950 border-t border-zinc-900" id="brands">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase">
              Signature <span className="text-[#ff5400]">Experiences</span>
            </h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
              Entertainment properties engineered to create unforgettable crowd
              energy and premium experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-zinc-800 rounded-[2rem] p-10 hover:scale-[1.02] hover:border-[#ff5400] hover:shadow-[0_0_25px_rgba(255,84,0,0.1)] transition duration-500 cursor-default">
              <div className="text-sm uppercase tracking-[0.4em] text-[#ff5400] mb-5">
                EDM EXPERIENCE
              </div>
              <h3 className="text-5xl font-black uppercase">GraveYard</h3>
              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                A dark-themed immersive EDM experience featuring DJs, lasers,
                live visuals, underground aesthetics, and crowd-first nightlife
                culture.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-[2rem] p-10 hover:scale-[1.02] hover:border-[#ff5400] hover:shadow-[0_0_25px_rgba(255,84,0,0.1)] transition duration-500 cursor-default">
              <div className="text-sm uppercase tracking-[0.4em] text-[#ff5400] mb-5">
                FESTIVAL PROPERTY
              </div>
              <h3 className="text-5xl font-black uppercase">RageX</h3>
              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                A futuristic entertainment property blending EDM, performances,
                celebrity appearances, visual production, and youth culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="uppercase tracking-[0.4em] text-[#ff5400] text-sm">
                What We Do
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase mt-4">
                Entertainment.
                <br />
                Production.
                <br />
                Experience.
              </h2>
            </div>

            <p className="max-w-xl text-zinc-400 text-lg leading-relaxed">
              From concept to execution, we manage entertainment ecosystems for
              colleges, brands, nightlife venues, festivals, and corporate
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Concert Management',
                desc: 'Artist handling, venue planning, stage production, and audience management.',
              },
              {
                title: 'EDM & DJ Nights',
                desc: 'Laser shows, DJ bookings, immersive lighting and crowd experiences.',
              },
              {
                title: 'Fashion Events',
                desc: 'Fashion shows, runway production, influencer and celebrity coordination.',
              },
              {
                title: 'Corporate Shows',
                desc: 'Premium entertainment experiences for corporate events and brand activations.',
              },
              {
                title: 'Artist & Celebrity Management',
                desc: 'Connecting brands and events with performers, artists and public figures.',
              },
              {
                title: 'Event Production',
                desc: 'End-to-end execution with stage, sound, visual and audience production.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-[#ff5400] hover:shadow-[0_0_15px_rgba(255,84,0,0.1)] transition duration-300 group cursor-default"
              >
                <h3 className="text-2xl font-bold group-hover:text-[#ff5400] transition-colors">{service.title}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-[#ff5400] text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            ['80K+', 'Audience Reach'],
            ['20+', 'Events Planned'],
            ['5+', 'Entertainment Formats'],
            ['100%', 'Experience Focused'],
          ].map(([number, label]) => (
            <div key={label}>
              <h3 className="text-5xl md:text-6xl font-black">{number}</h3>
              <p className="mt-4 font-bold uppercase tracking-widest text-sm text-black/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners */}
      <div className="py-24 overflow-hidden" id="partners">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center md:text-center">Our Previous <span className="text-[#ff5400]">Partners</span></h2>
          <div className="h-[1px] w-full bg-zinc-800 mt-6"></div>
        </div>
        <section className="h-20 bg-zinc-950 border-y border-zinc-800 flex items-center overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee whitespace-nowrap min-w-max items-center gap-16 px-8">
            {/* First set of logos */}
            {[
              { type: 'image', src: partnerRed, alt: 'Red Bull' },
              { type: 'image', src: partnerAdv, alt: 'Advitiya' },
              { type: 'image', src: partnerTkt, alt: 'TktHive' },
              { type: 'image', src: partnerWhe, alt: 'White Heaven Entertainment' },
              { type: 'image', src: partnerInn, alt: 'InnovXus' },
              { type: 'image', src: partnerInterview, alt: 'Interview Buddy' },
              { type: 'image', src: partnerInferno, alt: 'Inferno' },
              { type: 'image', src: partnerBridge, alt: 'BridgeNow' },
              { type: 'image', src: partnerDin, alt: 'DineX' },
              { type: 'image', src: partnerDriftX, alt: 'DriftX' },
            ].map((brand, idx) => (
              <div key={`set1-${idx}`} className="flex items-center mx-4">
                {brand.type === 'image' ? (
                  <img src={brand.src} alt={brand.alt} className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="text-zinc-500 font-black text-2xl uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-[#ff5400] transition-all cursor-default">
                    {brand.value}
                  </div>
                )}
              </div>
            ))}
            {/* Second identical set of logos for infinite scrolling illusion */}
            {[
              { type: 'image', src: partnerRed, alt: 'Red Bull' },
              { type: 'image', src: partnerTkt, alt: 'TktHive' },
              { type: 'image', src: partnerWhe, alt: 'White Heaven Entertainment' },
              { type: 'image', src: partnerInn, alt: 'InnovXus' },
              { type: 'image', src: partnerInterview, alt: 'Interview Buddy' },
              { type: 'image', src: partnerInferno, alt: 'Inferno' },
              { type: 'image', src: partnerDriftX, alt: 'DriftX' },
            ].map((brand, idx) => (
              <div key={`set2-${idx}`} className="flex items-center mx-4">
                {brand.type === 'image' ? (
                  <img src={brand.src} alt={brand.alt} className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                ) : (
                  <div className="text-zinc-500 font-black text-2xl uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-[#ff5400] transition-all cursor-default">
                    {brand.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact */}
      <section className="py-28 px-6 border-t border-zinc-900" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-[#ff5400] text-sm">
            Let’s Build Experiences
          </p>

          <h2 className="text-4xl md:text-7xl font-black uppercase mt-6 leading-tight">
            Partner With
            <br />
            Vibranta Live
          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Collaborate with us for concerts, entertainment festivals, artist
            management, fashion shows, college fests, nightlife experiences,
            and corporate entertainment productions.
          </p>

          <div className="mt-12 flex flex-col gap-5 items-center">
            <div className="bg-zinc-900 border border-zinc-800 hover:border-[#ff5400] hover:text-[#ff5400] hover:shadow-[0_0_15px_rgba(255,84,0,0.2)] transition-all rounded-full px-8 py-4 text-lg cursor-pointer">
              partnerships@lynqup.in
            </div>

            <div className="bg-zinc-900 border border-zinc-800 hover:border-[#ff5400] hover:text-[#ff5400] hover:shadow-[0_0_15px_rgba(255,84,0,0.2)] transition-all rounded-full px-8 py-4 text-lg cursor-pointer">
              +91 9771072294
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black uppercase">
              Vibranta <span className="text-[#ff5400]">Live</span>
            </h3>
            <p className="text-zinc-500 mt-2 text-sm">
              A division of LYNQUP PRIVATE LIMITED
            </p>
            <p className="text-zinc-500 mt-2 text-sm">
              CIN: U82300BR2025PTC079616
            </p>
          </div>

          <div className="text-zinc-500 text-sm text-center md:text-right">
            © 2026 Vibranta Live. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
