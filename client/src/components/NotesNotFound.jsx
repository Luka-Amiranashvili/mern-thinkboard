import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-gray-500 rounded-full p-8">
        <NotebookIcon className="size-10 text-green-500" />
      </div>
      <h3 className="text-2xl text-white font-semibold">No notes yet</h3>
      <p className="text-3xl font-extralight text-neutral-100 dark:text-stone-100">
        Ready to orgainze your thoughts? Create your first note to get started
        on your journey.
      </p>
      <Link
        to={"/create"}
        className="p-3 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-400 dark:hover:bg-green-500 transition"
      >
        Create your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
