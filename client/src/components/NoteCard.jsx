import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils.js";
import { Link } from "react-router";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of navigation behaviour

    if (!window.confirm("Are you sure to delete this note?")) return;

    try {
      api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of deleted one
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#00ff9d] p-4 block"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {note.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {note.content}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span>{formatDate(new Date(note.createdAt))}</span>
        <div className="flex items-center gap-2">
          <PenSquareIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <button
            onClick={(e) => handleDelete(e, note._id)}
            className="p-1 rounded-full bg-red-100 hover:bg-red-200 dark:bg-red-400 dark:hover:bg-red-500 transition"
          >
            <Trash2Icon className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
