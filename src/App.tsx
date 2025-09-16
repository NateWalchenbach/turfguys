import React from "react";
import Gallery from "./components/Gallery";
import {
  Grab as Grass,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Home,
  CheckCircle,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img
                src="/Logo_1-768x473.png"
                alt="The Turf Guys Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold tracking-wide text-white">
                The Turf Guys
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-orange-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-orange-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="hover:text-orange-400 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#about"
                className="hover:text-orange-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-orange-400 transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-green-50 to-orange-50 min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Premium <span className="text-orange-500">Artificial Turf</span>{" "}
                &<span className="text-green-500"> Landscaping</span> Services
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Professional subcontractors delivering exceptional artificial
                turf installation and complete landscaping solutions. Quality
                workmanship that transforms your outdoor space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                  Schedule Consultation
                </button>
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="./public/LOGO_1-768x473.png"
                alt="Beautiful artificial turf installation"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-bold text-lg">Quality Guaranteed</p>
                    <p className="text-gray-600">Professional Installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From artificial turf installation to complete landscape
              transformations, we deliver professional results that exceed
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-3 rounded-full mr-4">
                  <Grass className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Artificial Turf Installation
                </h3>
              </div>
              <img
                src="./public/photo2.webp"
                alt="Artificial turf installation"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Premium synthetic turf solutions for residential and commercial
                properties. Low maintenance, year-round green appearance, and
                exceptional durability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Professional site preparation and drainage
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  High-quality synthetic grass materials
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Expert installation and finishing
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Full-Service Landscaping
                </h3>
              </div>
              <img
                src="./public/photo3.webp "
                alt="Professional landscaping"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Complete landscape design and installation services. From
                concept to completion, we transform your outdoor space into a
                beautiful, functional environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  Custom landscape design and planning
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  Hardscaping and outdoor living spaces
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  Plant selection and installation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose The Turf Guys?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              As professional subcontractors, we bring expertise, reliability,
              and exceptional quality to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Workmanship</h3>
              <p className="text-gray-300 leading-relaxed">
                We take pride in delivering exceptional results that stand the
                test of time. Every project is completed to the highest
                standards.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our experienced subcontractor team brings years of expertise in
                artificial turf installation and landscaping services.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reliable Service</h3>
              <p className="text-gray-300 leading-relaxed">
                From initial consultation to project completion, we provide
                dependable service and clear communication throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                About The Turf Guys
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We are professional subcontractors specializing in artificial
                turf installation and comprehensive landscaping services. Our
                commitment to quality and attention to detail sets us apart in
                the industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to install premium artificial turf for a
                low-maintenance lawn or need complete landscape transformation,
                we have the expertise and experience to bring your vision to
                life. We work with contractors, property managers, and
                homeowners to deliver outstanding results.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <span className="font-semibold">Quality Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <span className="font-semibold">Professional Team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="../../public/photo1.webp"
                alt="Professional landscaping team at work"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ready to transform your outdoor space? Contact us for a
              professional consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">(555) 123-TURF</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">hey@theturfguys.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-gray-300">
                      Metro Area & Surrounding Communities
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-900 rounded-xl">
                <h4 className="font-bold text-lg mb-3 text-orange-400">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">
                Request a Quote
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Artificial Turf Installation</option>
                    <option>Full Landscaping</option>
                    <option>Both Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/Logo_1-768x473.png"
                alt="The Turf Guys Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold tracking-wide">
                The Turf Guys
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 font-medium">
                Professional Subcontractors
              </p>
              <p className="text-gray-300">
                Artificial Turf & Landscaping Excellence
              </p>
              <p className="text-sm text-gray-500 mt-2">
                © 2024 The Turf Guys. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
