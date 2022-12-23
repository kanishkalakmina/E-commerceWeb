import Photo from "./Photo"

const Home = () => {
return(
  <div className=' mx-auto px-4 py-16 bg-white text-black text-center w-full'>
        <div className="pt-20">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-yellow-400">WELCOME TO E-CLOTHING</span> </h1>
            <div>
              <Photo/>
            </div>
        </div>
    </div>
)
}

export default Home