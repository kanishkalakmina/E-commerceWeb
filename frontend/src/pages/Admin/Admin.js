import Form from '../../components/form/Form'
import Posts from '../../components/post/posts'
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'


 
function Admin() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

return (
  <div className='bg-gray-800'>
    <Form currentId={currentId} setCurrentId={setCurrentId}/>
    <div className='mx-auto px-4 py-10  text-black text-center'>
    <h1 class="mb-5 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-gray-500">UPDATE & DELETE PRODUCTS</span> </h1>
    </div>
    <Posts setCurrentId={setCurrentId}/>
  </div>
)
}

export default Admin