"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Star, Instagram, Scissors, Users, Play, Pause } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BookingCalendar from "@/components/booking-calendar"

export default function IkeBarberWebsite() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const handleVideoPlay = (index: number) => {
    setPlayingVideo(index)
  }

  const handleVideoPause = () => {
    setPlayingVideo(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gold-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Ike<span className="text-gold-500">.</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-gold-500 transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-gold-500 transition-colors">
                About
              </a>
              <a href="#services" className="text-white hover:text-gold-500 transition-colors">
                Services
              </a>
              <a href="#videos" className="text-white hover:text-gold-500 transition-colors">
                Videos
              </a>
              <a href="#gallery" className="text-white hover:text-gold-500 transition-colors">
                Gallery
              </a>
              <a href="#reviews" className="text-white hover:text-gold-500 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-white hover:text-gold-500 transition-colors">
                Contact
              </a>
            </div>
            <Button
              className="bg-gold-500 hover:bg-gold-600 text-black font-semibold"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in">
              IKE
              <span className="block text-gold-500 animate-slide-in-right">THE BARBER</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">Precision. Style. Confidence.</p>
            <div className="flex items-center justify-center text-gray-400 mb-12">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">85 Steve Biko Street, Sunnyside, Pretoria</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Cut
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Watch Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Meet Ike</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With over 8 years of experience in the art of barbering, Ike has mastered the craft of creating sharp,
                  clean cuts that enhance every client's natural style. Trained in both classic and contemporary
                  techniques, Ike brings precision and passion to every haircut.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  What sets Ike apart is his attention to detail and commitment to understanding each client's unique
                  style. From executive cuts to trendy fades, every service is delivered with the highest level of
                  professionalism and care.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform duration-300">
                      <Scissors className="w-8 h-8 text-black" />
                    </div>
                    <p className="font-semibold text-black">8+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <p className="font-semibold text-black">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/Ike the barber.png?height=600&width=500"
                  alt="Ike the Barber"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-black p-6 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">{'"Precision in every cut"'}</p>
                  <p className="text-sm">- Ike's Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Booking Section */}
      <section id="services" className="py-20 bg-black animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Services & Booking</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Professional barbering services tailored to your style and preferences
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Our Services</h3>
                <div className="space-y-6">
                  {[
                    {
                      service: "Normal Cut",
                      price: "R80",
                      description: "Traditional cuts with modern precision",
                    },
                    {
                      service: "Normal Cut + Dye (Standard Color)",
                      price: "R160",
                      description: "Normal cut with standard color dye",
                    },
                    {
                      service: "Normal Cut + Dye (Special Color)",
                      price: "R200",
                      description: "Normal cut with premium color dye",
                    },
                    {
                      service: "Kids Cut (under 12)",
                      price: "R60",
                      description: "Special cuts for children under 12",
                    },
                    {
                      service: "Beard Trim",
                      price: "R40",
                      description: "Shape and style your facial hair",
                    },
                    {
                      service: "Full Shave (Hot Towel)",
                      price: "R70",
                      description: "Complete shave with hot towel treatment",
                    },
                    {
                      service: "Fade Cut",
                      price: "R100",
                      description: "Low, mid, and high fade variations",
                    },
                    {
                      service: "Line-up Only",
                      price: "R50",
                      description: "Clean edge-ups and touch-ups",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start p-4 border border-gray-800 rounded-lg hover:border-gold-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <div>
                        <h4 className="text-white font-semibold text-lg">{item.service}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <Badge className="bg-gold-500 text-black font-bold">{item.price}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Book Your Appointment</h3>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gold-500" />
                    Operating Hours
                  </h4>
                  <div className="space-y-2 text-gray-300 mb-6">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-400">Closed</span>
                    </div>
                  </div>
                </div>

                <BookingCalendar onBookingSelect={() => {}} />

                <div className="text-center mt-6">
                  <p className="text-gray-400 text-sm mb-2">Or call directly:</p>
                  <a href="tel:+27618093022" className="text-gold-500 font-semibold text-lg hover:underline">
                    +27 61 809 3022
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-gray-900 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Watch Our Work</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See Ike's precision and artistry in action - from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haircut%20video3-kCkTTGqXdWxlsWeoQrm3zGlgGAob4T.mp4",
                  title: "Classic Fade Transformation",
                  description: "Watch a complete fade cut from start to finish",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haircut%20video2-XdWNhEFCzyRrngLvN8QC1hBeH1sCx9.mp4",
                  title: "Precision Line-up",
                  description: "Perfect edge-ups and detailed finishing work",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haircut%20video4-9wTdBo8uLiYkBQ6yGR2YSFWN2ISDnu.mp4",
                  title: "Modern Style Cut",
                  description: "Contemporary styling with classic techniques",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haircut%20video5-7PfVbbLER1sqxTfSAoVal2NEf3Doxy.mp4",
                  title: "Professional Finish",
                  description: "The final touches that make all the difference",
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    <video
                      id={`video-${index}`}
                      className="w-full h-full object-cover cursor-pointer"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls={false}
                      onClick={(e) => {
                        const video = e.target as HTMLVideoElement
                        const allVideos = document.querySelectorAll("video")

                        // Pause all other videos
                        allVideos.forEach((v, i) => {
                          if (i !== index && !v.paused) {
                            v.pause()
                            v.currentTime = 0
                          }
                        })

                        // Toggle current video
                        if (video.paused) {
                          video.play()
                          setPlayingVideo(index)
                        } else {
                          video.pause()
                          setPlayingVideo(null)
                        }
                      }}
                      onPlay={() => setPlayingVideo(index)}
                      onPause={() => setPlayingVideo(null)}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Click-to-play overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      <div className="text-center">
                        {playingVideo === index ? (
                          <div className="bg-black/60 rounded-full p-3 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Pause className="w-10 h-10 text-white" />
                          </div>
                        ) : (
                          <div className="bg-gold-500 rounded-full p-4 backdrop-blur-sm transform hover:scale-110 transition-all duration-300 shadow-lg">
                            <Play className="w-10 h-10 text-black ml-1" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pointer-events-none">
                      <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                      <p className="text-gray-300 text-sm">{video.description}</p>
                      {playingVideo === index && (
                        <div className="mt-2 flex items-center text-gold-500 text-xs">
                          <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse mr-2"></div>
                          Now Playing
                        </div>
                      )}
                    </div>

                    {/* Gold Border Animation */}
                    <div
                      className={`absolute inset-0 border-2 rounded-lg transition-all duration-300 pointer-events-none ${
                        playingVideo === index ? "border-gold-500" : "border-transparent group-hover:border-gold-500/50"
                      }`}
                    ></div>
                  </div>

                  {/* Floating Play Button */}
                  <div className="absolute top-4 right-4 bg-gold-500 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                    <Scissors className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-gray-300 mb-6 text-lg">Ready to experience this level of precision?</p>
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Gallery</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">See the precision and artistry in every cut</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/gallery-1.jpg", alt: "Clean fade haircut by Ike" },
                { src: "/images/gallery-2.jpg", alt: "Professional street-style cut" },
                { src: "/images/gallery-3.jpg", alt: "Barbershop interior with clients" },
                { src: "/images/gallery-4.jpg", alt: "Fresh urban fade cut" },
                { src: "/images/gallery-5.jpg", alt: "Precision fade and lineup" },
                { src: "/images/gallery-6.jpg", alt: "Clean professional cut" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer transform hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Scissors className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
                onClick={() => window.open("https://instagram.com/ikethebarber", "_blank")}
              >
                View More on Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-black animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Reviews</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">What our clients say about their experience</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Thabo Mthembu",
                  rating: 5,
                  review:
                    "Ike is hands down the best barber in Pretoria. His attention to detail is incredible and he always knows exactly what I want. Been coming here for 2 years now!",
                  service: "Regular Client",
                },
                {
                  name: "Michael Johnson",
                  rating: 5,
                  review:
                    "Professional service, clean shop, and amazing cuts every time. Ike takes his time to make sure everything is perfect. Highly recommend!",
                  service: "Fade Specialist",
                },
                {
                  name: "David Nkomo",
                  rating: 5,
                  review:
                    "Found Ike through Instagram and I'm so glad I did. The best fade I've ever had and great conversation too. Will definitely be back!",
                  service: "New Client",
                },
              ].map((review, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 transform hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{review.review}"</p>
                    <div>
                      <p className="text-white font-semibold">{review.name}</p>
                      <p className="text-gray-400 text-sm">{review.service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Follow us for more reviews and updates</p>
              <Link
                href="https://instagram.com/ikethebarber"
                className="inline-flex items-center text-gold-500 hover:text-gold-400 font-semibold"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @ikethebarber
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Ready for your next cut? Contact us or visit our shop
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 mb-8">
                <div className="flex items-start justify-center">
                  <MapPin className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div className="text-center">
                    <h4 className="font-semibold text-black mb-1 text-xl">Visit Our Shop</h4>
                    <p className="text-gray-700 text-lg">
                      85 Steve Biko Street
                      <br />
                      Sunnyside, Pretoria
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-center">
                  <Phone className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div className="text-center">
                    <h4 className="font-semibold text-black mb-1 text-xl">Call Us</h4>
                    <a href="tel:+27618093022" className="text-gray-700 hover:text-gold-500 text-lg font-medium">
                      +27 61 809 3022
                    </a>
                  </div>
                </div>

                <div className="flex items-start justify-center">
                  <Mail className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                  <div className="text-center">
                    <h4 className="font-semibold text-black mb-1 text-xl">Email Us</h4>
                    <a href="mailto:bookings@ikethebarber.co.za" className="text-gray-700 hover:text-gold-500 text-lg">
                      bookings@ikethebarber.co.za
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.123456789!2d28.2292!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ0JzUyLjQiUyAyOMKwMTMnNDUuMSJF!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ike the Barber Location"
                ></iframe>
              </div>

              <div className="text-center mt-8">
                <Button
                  size="lg"
                  className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const message = "Hi Ike! I'd like to book an appointment or ask about your services."
                    const whatsappUrl = `https://wa.me/27618093022?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, "_blank")
                  }}
                >
                  Contact Us on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-4">
                  Ike<span className="text-gold-500">.</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Professional barbering services in the heart of Sunnyside, Pretoria.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://instagram.com/ikethebarber" className="text-gray-400 hover:text-gold-500">
                    <Instagram className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#about" className="block text-gray-400 hover:text-gold-500">
                    About
                  </a>
                  <a href="#services" className="block text-gray-400 hover:text-gold-500">
                    Services
                  </a>
                  <a href="#videos" className="block text-gray-400 hover:text-gold-500">
                    Videos
                  </a>
                  <a href="#gallery" className="block text-gray-400 hover:text-gold-500">
                    Gallery
                  </a>
                  <a href="#reviews" className="block text-gray-400 hover:text-gold-500">
                    Reviews
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-400">
                  <p>85 Steve Biko Street</p>
                  <p>Sunnyside, Pretoria</p>
                  <p>+27 61 809 3022</p>
                  <p>bookings@ikethebarber.co.za</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">© {new Date().getFullYear()} Ike the Barber. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            const message = "Hi Ike! I'd like to book an appointment or ask about your services."
            const whatsappUrl = `https://wa.me/27618093022?text=${encodeURIComponent(message)}`
            window.open(whatsappUrl, "_blank")
          }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 float btn-animate"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </button>
      </div>
    </div>
  )
}
