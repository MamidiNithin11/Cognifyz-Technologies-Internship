import {PenSquareIcon} from "lucide-react"
import {Trash2Icon} from "lucide-react"
import {Link} from 'react-router';
import api from '../lib/axios';
import toast from "react-hot-toast";

const handleDelete = async (e,id) => {
    e.preventDefault();
    // confirm deletion
    if (!window.confirm("Are you sure you want to delete this note?")) {
        return;
    }
    // delete note
    try {
    await api.delete(`/notes/${id}`);
     toast.success("Note deleted successfully");
     setTimeout(() => {
     window.location.reload();
  },800 );
}catch (error) {
        console.log("Error deleting note:", error);
        toast.error("Error deleting note");
    }
};

const NoteCard = (prope) => {
    const {note} = prope;
  return (
   <Link to={`/note/${note._id}`} className="p-5 min-h-200 min-w-200 card bg-base-100 bg-black hover:shadow-lg transition-all duration-200 border border-t-4 border-solid border-[#3F5EFB]">
        <h2 className="text-xlg font-semibold text-white-800">{note.title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-3 text-base-content/70">{note.content.length > 100 ? note.content.slice(0, 100) + '...' : note.content}</p>
        <span className="text-sm text-gray-500 mt-2 block">Created at: {new Date(note.createdAt).toLocaleDateString()}</span>
        <div className='flex items-center gap-1 mt-3'>
            <PenSquareIcon className='size-5 text-primary' />
            <span className='text-sm text-gray-500'>Edit</span>
            <button className="btn btn-ghost ml-auto btn-xs text-red-500 hover:text-red-700" onClick={(e) =>handleDelete(e, note._id)}>
               <Trash2Icon className='size-5' />
            </button>
        </div>
   </Link>

  )
}
export default NoteCard;
