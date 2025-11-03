"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User, Phone } from "lucide-react"

interface BookingCalendarProps {
  onBookingSelect: (date: string, time: string, service: string, name: string, phone: string) => void
}

export default function BookingCalendar({ onBookingSelect }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [customerName, setCustomerName] = useState<string>("")
  const [customerPhone, setCustomerPhone] = useState<string>("")

  // Generate next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        dates.push({
          date: date.toISOString().split("T")[0],
          display: date.toLocaleDateString("en-ZA", {
            weekday: "short",
            month: "short",
            day: "numeric",
          }),
        })
      }
    }
    return dates
  }

  const availableTimes = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ]

  const services = [
    { name: "Normal Cut", price: "R100" },
    { name: "Normal Cut + Black Dye", price: "R160" },
    { name: "Normal Cut + Dye (Special Color)", price: "R300" },
    { name: "Kids Cut (under 12)", price: "R70" },
    { name: "Beard Trim", price: "R40" },
    { name: "Full Shave", price: "R70" },
    { name: "Fade Cut", price: "R100" },
    { name: "Line-up Only", price: "R50" },
  ]

  const handleBooking = () => {
    if (selectedDate && selectedTime && selectedService && customerName && customerPhone) {
      const selectedServiceDetails = services.find(
        (service) => selectedService === `${service.name} (${service.price})`,
      )

      const formattedDate = new Date(selectedDate).toLocaleDateString("en-ZA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      const bookingDetails = `🗓️ *BOOKING REQUEST*

👤 *Customer Details:*
• Name: ${customerName}
• Phone: ${customerPhone}

✂️ *Service Details:*
• Service: ${selectedServiceDetails?.name || selectedService.split(" (")[0]}
• Price: ${selectedServiceDetails?.price || "TBC"}

📅 *Appointment Details:*
• Date: ${formattedDate}
• Time: ${selectedTime}
• Location: 85 Steve Biko Street, Sunnyside, Pretoria

💬 *Message:*
Hi Ike! I would like to book an appointment with the above details. Please confirm if this time slot is available. Thank you!

---
*Sent via Ike the Barber website*`

      const whatsappUrl = `https://wa.me/27618093022?text=${encodeURIComponent(bookingDetails)}`
      window.open(whatsappUrl, "_blank")

      // Reset form after successful booking
      setSelectedDate("")
      setSelectedTime("")
      setSelectedService("")
      setCustomerName("")
      setCustomerPhone("")
    }
  }

  const isFormComplete = selectedDate && selectedTime && selectedService && customerName && customerPhone

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-gold-500" />
          Book Your Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Customer Details */}
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2 flex items-center">
              <User className="w-4 h-4 mr-2 text-gold-500" />
              Your Name *
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2 flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gold-500" />
              Phone Number *
            </label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-gold-500 focus:outline-none placeholder-gray-400"
              placeholder="+27 71 234 5678"
              required
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-white font-medium mb-3">Select Service *</label>
          <div className="grid grid-cols-1 gap-2">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => setSelectedService(`${service.name} (${service.price})`)}
                className={`p-3 rounded-lg border text-left transition-all duration-300 transform hover:scale-105 ${
                  selectedService === `${service.name} (${service.price})`
                    ? "border-gold-500 bg-gold-500/10 text-gold-500"
                    : "border-gray-700 text-gray-300 hover:border-gray-600"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{service.name}</span>
                  <span className="font-bold">{service.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-white font-medium mb-3">Select Date *</label>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {generateDates().map((dateObj) => (
              <button
                key={dateObj.date}
                onClick={() => setSelectedDate(dateObj.date)}
                className={`p-3 rounded-lg border text-center transition-all duration-300 transform hover:scale-105 ${
                  selectedDate === dateObj.date
                    ? "border-gold-500 bg-gold-500/10 text-gold-500"
                    : "border-gray-700 text-gray-300 hover:border-gray-600"
                }`}
              >
                {dateObj.display}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <label className="block text-white font-medium mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-gold-500" />
              Select Time *
            </label>
            <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg border text-center transition-all duration-300 transform hover:scale-105 ${
                    selectedTime === time
                      ? "border-gold-500 bg-gold-500/10 text-gold-500"
                      : "border-gray-700 text-gray-300 hover:border-gray-600"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Booking Summary */}
        {isFormComplete && (
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h4 className="text-white font-semibold mb-3 flex items-center">📋 Booking Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Name:</span>
                <span className="text-white">{customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Phone:</span>
                <span className="text-white">{customerPhone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Service:</span>
                <span className="text-white">{selectedService.split(" (")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-gold-500 font-bold">{selectedService.match(/$$([^)]+)$$/)?.[1] || "TBC"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">
                  {new Date(selectedDate).toLocaleDateString("en-ZA", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time:</span>
                <span className="text-white">{selectedTime}</span>
              </div>
            </div>
          </div>
        )}

        {/* Book Button */}
        <Button
          onClick={handleBooking}
          disabled={!isFormComplete}
          className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isFormComplete ? "Send Booking Request via WhatsApp" : "Complete All Fields to Book"}
        </Button>

        {!isFormComplete && (
          <div className="text-center">
            <p className="text-gray-400 text-sm">* All fields are required to send your booking request</p>
            <div className="flex justify-center mt-2 space-x-1">
              <div className={`w-2 h-2 rounded-full ${customerName ? "bg-gold-500" : "bg-gray-600"}`}></div>
              <div className={`w-2 h-2 rounded-full ${customerPhone ? "bg-gold-500" : "bg-gray-600"}`}></div>
              <div className={`w-2 h-2 rounded-full ${selectedService ? "bg-gold-500" : "bg-gray-600"}`}></div>
              <div className={`w-2 h-2 rounded-full ${selectedDate ? "bg-gold-500" : "bg-gray-600"}`}></div>
              <div className={`w-2 h-2 rounded-full ${selectedTime ? "bg-gold-500" : "bg-gray-600"}`}></div>
            </div>
          </div>
        )}

        <div className="text-center pt-4 border-t border-gray-700">
          <p className="text-gray-400 text-xs mb-2">Your booking request will be sent directly to Ike via WhatsApp</p>
          <p className="text-gray-400 text-xs">You'll receive a confirmation once your appointment is approved</p>
        </div>
      </CardContent>
    </Card>
  )
}
