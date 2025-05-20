import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Circular Images */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              {/* Top row - two equal circles */}
              <img
                src="/redefine/testimonal.png"
                alt="Modern desk setup"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-white">
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Explore ideas together
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Bring those ideas to life
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Ship better outcomes
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
