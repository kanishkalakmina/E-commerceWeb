import React from 'react'
import moment from 'moment'

const Post =({post})=> {
  
  return (
<div className='py-6'>
    

<div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
<p class="text-sm font-semibold  text-gray-900 dark:text-white text-right py-3 px-3">{moment(post.createdAt).fromNow()}</p>
    <div className=''>
    <img class="p-8 px-20 h-[250px] rounded-t-lg" src={post.selectedFile} alt="" />
  
    </div>
    
  <div class="px-5 pb-5">
      
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-green-500 uppercase py-4 ">{post.title}</h5>
          <p class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white py-3 italic">#{post.tags}</p>
          
   
      
      <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-pink-500">${post.message}</span>
          <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</div>
      </div>
  </div>
</div>
</div>
  )
}

export default Post
