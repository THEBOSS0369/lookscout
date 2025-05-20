import Image from "next/image";

export function TestimonialCard() {
  return (
    <div className="bg-white p-16">
      <div className="bg-gray-50 p-8 mx-auto">
        {/* Lookscout Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <img
              src="/lookscout/lookscout.png"
              alt="Lookscout logo"
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-2xl max-w-3xl text-gray-700 font-semibold mx-auto text-center mb-8 leading-relaxed">
          "Thank you for making it painless, pleasant and most of all hassle
          free! I love LookScout. I can't say enough about LookScout.
          <br />
          Great job, I will definitely be ordering again!"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center justify-center">
          <img src="/lookscout/ceo.png" alt="Lisa Smith" />
        </div>
      </div>
    </div>
  );
}
