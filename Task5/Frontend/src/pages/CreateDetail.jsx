import { useState } from 'react'
import { Link,useNavigate } from 'react-router'
import toast from "react-hot-toast";
import { ArrowLeftIcon } from 'lucide-react'
import api from '../lib/axios'

const CreateDetail = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading,setloading]=useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setloading(true)
    try {
      await api.post('/notes', {
        title,
        content,
      })
      toast.success('Note created successfully')
      navigate('/')
      setTitle('')
      setContent('')
    } catch (error) {
      console.error('Error creating note:', error)
      if (error.response && error.response.status === 429) {
        toast.error('Rate limit exceeded. Please try again later.', {
          duration: 3000,
          icon: '🚫',
        })
      } else {
        toast.error('Something went wrong while creating the note.')}
    } finally {
      setloading(false)
    }
  }
    return (
      <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Link to="/" className="absolute top-4 left-4 text-blue-500 hover:underline btn btn-ghost">
      <ArrowLeftIcon className="size-5 font-bold"/>
        Back to Home
      </Link>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#3F5EFB] font-sans">Create Note</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-bold"  htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-white-800 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-bold" htmlFor="content">Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent	text-black"
                rows="5"
                required
              ></textarea>
            </div>
              <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors`}
            >
              {loading ? 'Creating...' : 'Create Note'}
            </button>
          </form>
        </div>
      </div>
      </>
      
    )
  }
  export default CreateDetail