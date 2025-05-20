"use client";

import { useState } from "react";

export function HeroSection() {
  const [notificationSent, setNotificationSent] = useState(false);

  const handleSendNotification = () => {
    // Check if browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }

    // Simple notification logic
    if (Notification.permission === "granted") {
      // If it's already granted, show notification
      showNotification();
    } else if (Notification.permission !== "denied") {
      // Otherwise, request permission
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  };

  const showNotification = () => {
    // Create and show the notification
    const notification = new Notification("Notification from Your App", {
      body: "Thank you for enabling notifications!",
      icon: "/hero/lookscout.png",
    });

    // Update UI state
    setNotificationSent(true);

    // Reset state after 3 seconds
    setTimeout(() => {
      setNotificationSent(false);
    }, 3000);
  };

  return (
    <section className="relative bg-blue-600 min-h-screen overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0">
        {/* Top-left geometric pattern */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10 animate-slowSpin">
          <div className="w-full h-full border-2 border-white rounded-full"></div>
        </div>

        {/* Top-right geometric shapes */}
        <div className="absolute top-16 right-16 w-96 h-96">
          <div className="relative w-full h-full animate-slowScale">
            <div className="absolute top-12 right-12 w-24 h-24 border-2 border-white rounded-full opacity-30"></div>
            <div className="absolute top-24 right-24 w-16 h-16 bg-blue-300 rounded-full opacity-40"></div>
          </div>
        </div>

        {/* Bottom geometric patterns */}
        <div className="absolute bottom-16 left-1/4 w-32 h-32 animate-slowSpin">
          <div className="w-full h-full border-2 border-white rounded-full opacity-20"></div>
        </div>

        <div className="absolute bottom-32 right-1/3 w-24 h-24 animate-slowScale">
          <div className="w-full h-full bg-white rounded-full opacity-15"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp">
              Your Supercharged
              <br />
              <span className="text-white">Design Workflow.</span>
            </h1>

            <p
              className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-lg animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              We've been told it is not possible to overachieve our customers'
              expectations. We have not reinvented the wheel, we decided to
              build upon it.
            </p>

            <button
              className={`bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg animate-fadeInUp button-hover ${
                notificationSent
                  ? "bg-green-500 text-gray-700"
                  : "hover:bg-blue-50"
              }`}
              style={{ animationDelay: "0.4s" }}
              onClick={handleSendNotification}
            >
              {notificationSent ? "Notification Sent!" : "Send Notification"}
            </button>

            {/* Support Section */}
            <div className="pt-16">
              <p
                className="text-blue-200 text-sm font-bold mb-6 animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                Who supports us
              </p>
              <div className="flex items-center space-x-8 opacity-80">
                <span
                  className="text-white font-semibold text-lg animate-fadeInUp"
                  style={{ animationDelay: "0.8s" }}
                >
                  <img src="/hero/GitLab.png" alt="Gitlab" />
                </span>
                <span
                  className="text-white font-semibold text-lg animate-fadeInUp"
                  style={{ animationDelay: "0.9s" }}
                >
                  <img src="/hero/slack.png" alt="Slack" />
                </span>
                <span
                  className="text-white font-semibold text-lg animate-fadeInUp"
                  style={{ animationDelay: "1s" }}
                >
                  <img src="/hero/netflix.png" alt="Netflix" />
                </span>
                <span
                  className="text-white font-semibold text-lg animate-fadeInUp"
                  style={{ animationDelay: "1.1s" }}
                >
                  <img src="/hero/paypal.png" alt="Paypal" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Geometric Design with Profile */}
          <div className="relative h-full flex items-center justify-center">
            <img
              src="/hero/user.png"
              alt="Professional headshot"
              className="w-full h-full object-cover animate-fadeInZoom"
            />
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Background geometric shapes */}
              <div className="absolute inset-0">
                {/* Large background circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-20 animate-slowSpin"></div>
                <div className="absolute top-16 left-16 w-24 h-24 border-2 border-white rounded-full opacity-30 animate-slowScale"></div>
                <div className="absolute bottom-16 right-16 w-20 h-20 bg-blue-300 rounded-full opacity-40 animate-slowSpin"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white rounded-full opacity-15 animate-slowScale"></div>

                {/* Quarter and half circles */}
                <div className="absolute top-0 left-0 w-16 h-16 border-2 border-white rounded-full opacity-25 animate-slowSpin"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-blue-400 rounded-full opacity-30 animate-slowScale"></div>

                {/* Rectangles and squares */}
                <div className="absolute top-32 right-8 w-16 h-16 bg-white opacity-20 rounded-lg animate-slowSpin"></div>
                <div className="absolute bottom-32 left-4 w-12 h-20 bg-blue-300 opacity-25 rounded-lg animate-slowScale"></div>
              </div>

              {/* Floating accent shapes */}
              <div className="absolute top-8 left-32 w-8 h-8 bg-yellow-300 rounded-full opacity-60 animate-floatPulse"></div>
              <div
                className="absolute bottom-12 right-32 w-6 h-6 bg-green-300 rounded-full opacity-60 animate-floatPulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-40 right-8 w-4 h-4 bg-pink-300 rounded-full opacity-60 animate-floatPulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating shapes */}
      <div className="absolute top-1/3 left-8 w-6 h-6 bg-white rounded-full opacity-20 animate-floatPulse"></div>
      <div
        className="absolute top-2/3 right-8 w-8 h-8 border-2 border-white rounded-full opacity-25 animate-floatPulse"
        style={{ animationDelay: "0.75s" }}
      ></div>

      {/* Inline CSS for Animations */}
      <style>
        {`
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
          @keyframes slowSpin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes slowScale {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
          @keyframes floatPulse {
            0% {
              transform: translateY(0);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-10px);
              opacity: 0.8;
            }
            100% {
              transform: translateY(0);
              opacity: 0.6;
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fadeInZoom {
            animation: fadeInZoom 1s ease-out forwards;
          }
          .animate-slowSpin {
            animation: slowSpin 20s linear infinite;
          }
          .animate-slowScale {
            animation: slowScale 5s ease-in-out infinite;
          }
          .animate-floatPulse {
            animation: floatPulse 3s ease-in-out infinite;
          }
          .button-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .button-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </section>
  );
}
