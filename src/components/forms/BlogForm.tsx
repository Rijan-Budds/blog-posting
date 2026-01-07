"use client";

import { useState } from "react";
import BlogEditor from "@/components/BlogEditor";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setMessage("Posted successfully!");
      setTitle("");
      setContent("");
    } else {
      setMessage("Failed to post.");
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark px-8 py-6">
          <h2 className="text-2xl font-bold text-black">Create New Blog Post</h2>
          <p className="text-primary-light mt-1">Share your thoughts with the world</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="blog-title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Blog Title
            </label>
            <input
              id="blog-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 outline-none transition-all duration-200 text-lg"
              placeholder="Enter an engaging title..."
            />
          </div>

          {/* Content Field */}
          <div>
            <label
              htmlFor="blog-content"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Content
            </label>
            <div className="border-2 border-gray-200 rounded-lg focus-within:border-primary transition-colors duration-200">
              <BlogEditor value={content} onChange={setContent} />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Publishing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Publish Post
                </span>
              )}
            </button>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div className={`p-4 rounded-lg text-center font-medium ${message.includes("successfully")
              ? "bg-green-50 text-green-700 border-2 border-green-200"
              : "bg-red-50 text-red-700 border-2 border-red-200"
              }`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
