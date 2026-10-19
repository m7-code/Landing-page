import React from "react";
import founderImg from "../assets/founder.jpg"; 

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5b1a8c] font-['Caveat'] text-3xl mb-2">Meet Our Founder</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1f2a6b] font-['Plus_Jakarta_Sans']">
            Pastor Jean Telfort
          </h3>
          {/* "Visionary Founder..." wala text yahan se hata diya gaya hai */}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side - Ab yeh choti aur controlled size mein hai */}
          <div className="w-full lg:w-5/12 max-w-sm lg:max-w-md mx-auto relative">
            {/* Peeche ka golden design */}
            <div className="absolute inset-0 bg-[#f2b416] rounded-[40px] transform rotate-3 scale-105 -z-10"></div>
            
            <img 
              src={founderImg} 
              alt="Pastor Jean Telfort" 
              /* object-top lagaya hai taake chehra cut na ho */
              className="w-full h-auto max-h-[550px] object-cover object-top rounded-[40px] shadow-xl relative z-10"
            />
          </div>

          {/* Text Side - Width thori barha di hai taake balance rahe */}
          <div className="w-full lg:w-7/12">
            <p className="text-gray-700 font-['Poppins'] text-lg leading-relaxed mb-6">
              A native of Port-au-Prince, Pastor Jean Telfort is the visionary founder of A New Haiti. He currently lives in Florida with his wife and children. 
            </p>
            <p className="text-gray-700 font-['Poppins'] text-lg leading-relaxed mb-8">
              Before returning to Florida, he lived in Charlotte, North Carolina, where he served as Benevolent Pastor, Community Liaison, and Assistant Pastor at Steel Creek Church.
            </p>

            {/* Quote Box */}
            <div className="bg-[#5b1a8c] text-white p-8 rounded-3xl relative overflow-hidden shadow-lg">
              <span className="absolute top-2 left-4 text-[80px] text-[#f2b416] opacity-30 font-serif leading-none">"</span>
              <p className="font-['Caveat'] text-2xl md:text-3xl relative z-10 leading-snug">
                When people know their value, families are strengthened. When families are strengthened, communities can be transformed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}