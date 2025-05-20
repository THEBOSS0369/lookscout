"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");

          if (el === titleRef.current) {
            el.classList.add("animate-fadeInUp");
          } else if (el === descriptionRef.current) {
            el.classList.add("animate-fadeInUp");
            el.style.animationDelay = "0.2s";
          } else if (featureRefs.current.includes(el as HTMLDivElement)) {
            el.classList.add("animate-slideInLeft");
            const index = featureRefs.current.indexOf(el as HTMLDivElement);
            el.style.animationDelay = `${0.3 + index * 0.2}s`;
          } else if (el === imageRef.current) {
            el.classList.add("animate-fadeInZoom");
          }

          observer.unobserve(el); // Only animate once
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      id: 1,
      icon: "/redefine/telegram.jpg",
      title: "Explore ideas together",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      id: 2,
      icon: "/redefine/idea.jpg",
      title: "Bring those ideas to life",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
    {
      id: 3,
      icon: "/redefine/ship.jpg",
      title: "Ship better outcomes",
      description:
        "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-gray-900 mb-4 opacity-0"
          >
            Redefining Product Features
          </h2>
          <p
            ref={descriptionRef}
            className="text-gray-600 text-lg max-w-3xl mx-auto opacity-0"
          >
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  if (el) {
                    featureRefs.current[index] = el;
                  }
                }}
                className="flex items-start space-x-4 opacity-0"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-medium transition-all duration-300 link-hover"
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
            ))}
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              <Image
                ref={imageRef}
                src="/redefine/photo.jpg"
                alt="Modern desk setup"
                width={600}
                height={400}
                className="w-full h-full opacity-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInZoom {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInZoom {
          animation: fadeInZoom 1s ease-out forwards;
        }
        .link-hover {
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }
        .link-hover:hover {
          transform: translateX(5px);
          color: #1d4ed8;
        }
        .opacity-0 {
          opacity: 0;
        }
        .is-visible {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
