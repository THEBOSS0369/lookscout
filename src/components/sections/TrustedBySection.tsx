export function TrustedBySection() {
  const brands = [
    { name: "THE VERGE", logo: "proud/verge.png" },
    { name: "slack", logo: "proud/slack.png" },
    { name: "Google", logo: "proud/google.png" },
    { name: "PayPal", logo: "proud/paypal.png" },
    { name: "Pinterest", logo: "proud/pinterest.png" },
    { name: "Shopify", logo: "proud/mailchimp.png" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Proud to Be Used By
          </h2>
          <p className="text-gray-500 text-md max-w-2xl mx-auto">
            Professionally generated content in real-time will have multiple
            touchpoints for offshoring, distributed and scalable, service via
            standards-rich technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
