'use client';

import React from 'react';

const locations = [
  {
    id: 'rochester-main',
    name: 'Rochester Main Street',
    address: '123 Main Street, Rochester, NH 03867',
    phone: '+1 (603) 555-0123',
    hours: {
      weekdays: '9:00 AM - 6:00 PM',
      weekends: '9:00 AM - 6:00 PM'
    },
    status: 'Open'
  },
  {
    id: 'portsmouth-market',
    name: 'Portsmouth Market Square',
    address: '45 Market Square, Portsmouth, NH 03801',
    phone: '+1 (603) 555-0124',
    hours: {
      weekdays: '8:00 AM - 7:00 PM',
      weekends: '8:00 AM - 8:00 PM'
    },
    status: 'Open'
  },
  {
    id: 'manchester-elm',
    name: 'Manchester Elm Street',
    address: '789 Elm Street, Manchester, NH 03101',
    phone: '+1 (603) 555-0125',
    hours: {
      weekdays: '7:00 AM - 8:00 PM',
      weekends: '8:00 AM - 8:00 PM'
    },
    status: 'Coming Soon'
  }
];

export default function LocationsPage() {
  return (
    <div className="bg-[#f9fcf8] min-h-screen">
      <div className="pt-40 pb-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-[#121b0e] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Our Locations
            </h1>
            <p className="text-[#121b0e] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Find your nearest Olyn Cha location and experience premium matcha in a welcoming atmosphere.
            </p>
          </div>

          {/* Locations List */}
          <div className="space-y-12">
            {locations.map((location, index) => (
              <div key={location.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-[#121b0e] text-2xl md:text-3xl font-bold leading-tight">
                        {location.name}
                      </h2>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        location.status === 'Open' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {location.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-[#121b0e] text-lg font-semibold mb-1">Address</h3>
                        <p className="text-[#121b0e] leading-relaxed">{location.address}</p>
                      </div>

                      <div>
                        <h3 className="text-[#121b0e] text-lg font-semibold mb-1">Phone</h3>
                        <a 
                          href={`tel:${location.phone}`} 
                          className="text-[#4bb814] hover:text-[#3a9610] transition-colors font-medium"
                        >
                          {location.phone}
                        </a>
                      </div>

                      <div>
                        <h3 className="text-[#121b0e] text-lg font-semibold mb-1">Hours</h3>
                        <div className="text-[#121b0e] leading-relaxed">
                          <p>Monday - Friday: {location.hours.weekdays}</p>
                          <p>Saturday - Sunday: {location.hours.weekends}</p>
                        </div>
                      </div>
                    </div>

                    {location.status === 'Open' && (
                      <div className="mt-6">
                        <a
                          href="/menu"
                          className="inline-flex items-center justify-center px-6 py-3 bg-[#4bb814] text-white text-lg font-bold rounded-xl hover:bg-[#3a9610] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          Order Now
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">📍</div>
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">Google Maps integration coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Areas */}
          <div className="mt-20">
            <h2 className="text-[#121b0e] text-3xl md:text-4xl font-bold leading-tight mb-8 text-center">
              Delivery Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[#121b0e] text-xl font-bold mb-4">Rochester Area</h3>
                <ul className="text-[#121b0e] space-y-2">
                  <li>Rochester</li>
                  <li>Somersworth</li>
                  <li>Dover</li>
                  <li>Durham</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#121b0e] text-xl font-bold mb-4">Portsmouth Area</h3>
                <ul className="text-[#121b0e] space-y-2">
                  <li>Portsmouth</li>
                  <li>Newington</li>
                  <li>Kittery (ME)</li>
                  <li>York (ME)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#121b0e] text-xl font-bold mb-4">Manchester Area</h3>
                <ul className="text-[#121b0e] space-y-2">
                  <li>Manchester</li>
                  <li>Bedford</li>
                  <li>Goffstown</li>
                  <li>Hooksett</li>
                </ul>
                <p className="text-[#4bb814] font-semibold mt-3">Coming Soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}