"use client";

import { useState } from "react";
import BlogEditor from "@/components/BlogEditor";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
  };

  return (
    <>
      <h1>Hi, let's make a new blog post. Shall we?!</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <label>Content</label>
        <BlogEditor value={content} onChange={setContent} />

        <button
          type="submit"
          className="mt-3 p-2 bg-black text-white rounded"
        >
          Publish
        </button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
}
