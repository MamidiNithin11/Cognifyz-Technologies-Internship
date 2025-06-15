import { useState, useEffect } from "react";
import Header from "../Components/Header"
import RateLimit from "../Components/RateLimit";
import toast from "react-hot-toast";
import NoteCard from "../Components/NoteCard";
import api from "../lib/axios";


const Home = () => {
  const [isRateLimited,setIsRateLimited] = useState(false);
  const [notes,setNotes] = useState([]);
  const [Loading,setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true);
    const fetchNotes=async()=>{
      try{
        const response = await api.get("/notes");
        setNotes(response.data);
        setIsRateLimited(false);
      }catch(e){
        console.log("Error in fetching notes",e);
        if(e.response?.status === 429){
          setIsRateLimited(true);
        }
        else{
          toast.error("Error in fetching notes");     }
      }finally{
        setIsLoading(false);
      }
    } 
    fetchNotes();
  },[])

  return (

  <div className="min-h-screen bg-gray-100">
    <Header />
    {notes.length > 0 && !isRateLimited ? (
      <div className="max-w-7xl mx-auto px-4 py-8 font-Roboto">
        {isRateLimited && <RateLimit />}

        {Loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length > 0 && !isRateLimited && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-red-500">Your Notes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </div>
          </div>
        )}
      </div>
    ) : (
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/6195/6195678.png" alt="No Notes" className="mx-auto mt-10 w-500 h-500" />
        <h2 className="text-2xl font-bold text-center mt-10">No Notes Found</h2>
        <p className="text-center text-gray-600 mt-4">
          Create your first note to get started!
        </p>
      </div>
    )}
  </div>
);
}
export default Home