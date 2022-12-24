import Posts from './posts'
import '../Admin/admin.css'
import React, {useEffect,  useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPostBySearch, getPosts,getPostsByTags } from '../../actions/posts'
import {useNavigate, useLocation} from 'react-router-dom'

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

const User = () => {
  
  const dispatch = useDispatch()
  const query = useQuery()
  const searchQuery = query.get('searchQuery')
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const navigate = useNavigate()

  const searchPost = () =>{
    if(search.trim()){
      dispatch(getPostBySearch({search}))
  
    }
    else{
        dispatch(getPosts())
    }
  }
  const FilterPost = () =>{
    if(search.trim() || tags){
      dispatch(getPostsByTags({tags: tags.join(',')}))
    }
  }

  return (
    <div className='mx-auto px-4 py-40 w-full h-full fes bg-fixed '>
     
<form class="flex items-center lg:px-[400px] sm:px-[100px] pb-8 ">   
    <label for="simple-search" class="sr-only">Search..</label>
    <div class=" w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            
        </div>
        <input 
                type="search" 
                id="simple-search" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search Products"
                onChange={(e)=> setSearch(e.target.value)}
                value={search}
                />
    </div>
    <button 
              type="button" 
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={searchPost}
              >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
       
    </button>
</form>
<div className='lg:px-[500px]  sm:px-[100px] '>
<ul class=" hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400 bg-white">
    <button>
   <li class="w-full">
        <div class="inline-block p-3 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" 
        onChange={()=>{}}
        >
        S
        </div>
    </li>
    </button>
    <li class="w-full">
        <div class="inline-block p-3 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={()=>{}}
        >M</div>
    </li>
    <li class="w-full">
        <div class="inline-block p-3 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={()=>{}}
        >L</div>
    </li>
    <li class="w-full">
    <div class="inline-block p-3 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
    onClick={()=>{}}
    >XL</div>
    </li>
    <li class="w-full">
    <div class="inline-block p-3 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
    onClick={()=>{}}
    >XXL</div>
    </li>
    <li class="w-full">
        <div class="inline-block p-3 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        onClick={()=>{}}
        >XXXL</div>
    </li>
</ul>
</div>



      <Posts/>
    </div>
  )
}

export default User