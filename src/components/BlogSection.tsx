"use client";

import Image from "next/image";
import { blogsData } from "../lib/mock-data";



export default function Blogs() {
  return (
    <section className="max-w-6xl mx-auto py-16 mt-20 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="text-[#1ee19b] text-base font-normal tracking-widest uppercase mb-4">
            BLOGS
          </h3>
          <h2 className="text-3xl md:text-5xl font-normal text-white leading-tight">
            Your guide to{" "}
            <span className="bg-gradient-to-r from-[#1ee19b] to-teal-400 bg-clip-text text-transparent">
              better
            </span>
            <br />
            product photography.
          </h2>
        </div>

        <button className="bg-[#1ee19b] hover:bg-emerald-600 text-black px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
          All Blogs
        </button>
      </div>

      {/* Blog posts */}
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          className="my-12 bg-gradient-to-r from-[#1e1e1e] to-[#181818] rounded-2xl overflow-hidden border border-[#ffffff26] hover:border-[#1ee19b] transition-all duration-500 hover:shadow-xl hover:shadow-[#1ee19b]/10 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative overflow-hidden p-2 rounded-2xl lg:rounded-none lg:rounded-l-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="rounded-2xl w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-emerald-300 text-black px-4 py-2 rounded-2xl text-sm font-medium border border-[#1ee19b]/30">
                  {blog.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-normal tracking-wide text-white mb-4 leading-tight">
                {blog.title}
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8">
                {blog.description}
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{blog.author}</p>
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
