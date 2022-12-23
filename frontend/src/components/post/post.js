import React from 'react'
import {useDispatch} from 'react-redux'
import { deletePost } from '../../actions/posts'

const Post =({post,setCurrentId})=> {

  const dispatch = useDispatch()
  
  return (
    <div className=''>
<div class="lg:py-4">
  <div class="px-4">
    <div class="block md:flex justify-between md:-mx-2 ">
      <div class="w-full lg:w-[400px] md:mx-2 mb-4 md:mb-0 ">
        <div class="bg-gradient-to-r to-white-700 from-white-700  rounded-lg overflow-hidden shadow bg-white ">
          <img class="lg:h-[200px] sm:h-[100px] h-[200px] w-[200px] pl-10 object-cover object-center " src={post.selectedFile} alt=""/>
          <div>
          <button type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-0 mr-11 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" 
          onClick={()=> setCurrentId(post._id)}
          >UPDATE</button>
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 ml-11 mb-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 object-right"
          onClick={()=> dispatch(deletePost(post._id))}
          >DELETE</button>
          </div>
          <div className='uppercase font-mono text-right text-[13px] text-white'></div>
          <div class="p-4 h-auto md:h-40 lg:h-28 sm:h-30 bg-gray-300">
            <div class="uppercase block text-black font-bold mb-2 text-[10px]">
             Title:  {post.title}
              
            </div>
            <div class="uppercase block text-black font-bold mb-2 text-[10px]">
             Tags:  #{post.tags}
              
            </div>
            <div class="text-black text-sm leading-relaxed block text-[10px] font-bold">
             Price:  {post.message}
            </div>
            
          </div>
        </div>
      </div>
     
      
    </div>
  </div>
</div>
</div>
  )
}

export default Post
