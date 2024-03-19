const Componentnav = () => {
    return (
        <div>
      <div className='flex w-[1400px] h-48px] mt-[50px]'>
          <div className='text-3xl font-bold ml-[140px] mr-[20px] text-[#150B2B]'>
              <h3>Recipe Calories</h3>
          </div>
          <div className='flex text-center ml-[180px] mt-[10px] text-[#150B2BB3]'>
              <div className='text-lg font-normal mr-5'>
                  <h3>Home</h3>
              </div>
              <div className='text-lg font-normal mr-5'>
                <h2>Recipes</h2>
              </div>
              <div className='text-lg font-normal mr-5'>
                <h2>About</h2>
              </div>
              <div className='text-lg font-normal'>
              <h3>Search</h3>
              </div>
              </div>
            <div className="flex ml-[200px]">
              <div className="mt-3 ">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                   </svg>
                 
              </div>
              <div className="mr-8">
                   <input className='p-4 rounded-[50px] w-[260] bg-[#150B2B0D] h-[48px] text-center text-lg font-normal '  placeholder='Search'  type="text" />
              </div>
              <div className="mt-1 mr-[30px] w-[48px] bg-[#0BE58A] h-[48px] rounded-[100px] p-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                 </svg>

              </div>
              
            </div>
      
      </div>
  </div>
    );
};

export default Componentnav;