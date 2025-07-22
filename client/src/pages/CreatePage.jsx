import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#110e0e] text-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to={"/"}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300"
          >
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <div className="rounded-xl bg-white shadow-md p-6 dark:bg-gray-800">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Create New Note
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Note Title"
                    className="w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 p-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="mt-3 w-full h-32 px-4 py-2 border  rounded-md 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="flex mt-4 justify-end">
                  <button
                    type="submit"
                    className={`px-5 py-2 rounded-3xl font-medium text-black ${
                      loading
                        ? "bg-green-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    } focus:outline-none focus:ring-2 focus:ring-green-500`}
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
