export function NewsletterSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-600 font-medium text-sm mb-3">
            1% OF THE INDUSTRY
          </p>
          <h2 className="text-3xl lg:text-3xl font-bold text-gray-700 mb-8 max-w-3xl mx-auto">
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </h2>

          <div className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 text-gray-600 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-6 py-3 font-medium rounded-r-md hover:bg-blue-600 transition-colors">
                Submit
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Fully Secure</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-600">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-600">Done Deal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
