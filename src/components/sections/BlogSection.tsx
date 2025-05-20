"use client";
import { useEffect } from "react";

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Organize your digital assets with a new methodology here.",
      description:
        "Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.",
      image: "blog/blog_one.png",
      author: "Andrew Miller",
      position: "CEO",
      date: "25 Apr",
      avatar: "blog/ceo_one.png",
    },
    {
      id: 2,
      title: "Organize your digital assets with a new methodology here.",
      description:
        "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
      image: "blog/blog_two.png",
      author: "David Munsan",
      position: "UX",
      date: "25 Apr",
      avatar: "blog/ceo_two.png",
    },
    {
      id: 3,
      title: "Organize your digital assets with a new methodology here.",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.",
      image: "blog/blog_three.png",
      author: "Andrew Meiler",
      position: "UI",
      date: "25 Apr",
      avatar: "blog/ceo_three.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-bounceIn {
            animation: bounceIn 0.6s ease-out forwards;
          }
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          .image-hover {
            transition: transform 0.3s ease;
          }
          .image-hover:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Latest Blog Posts
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden rounded-lg card-hover"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2 px-4">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm px-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex items-center">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-8 h-8 rounded-full mr-3 animate-bounceIn"
                    style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                  />
                  <div>
                    <div className="text-gray-900 font-medium text-sm">
                      {post.author}
                    </div>
                    <div className="text-gray-500 text-xs">{post.position}</div>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
