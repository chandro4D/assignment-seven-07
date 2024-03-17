const Componentnav = () => {
    return (
        <div>
      <div className='flex w-[1400px] h-48px] mt-[50px]'>
          <div className='text-3xl font-bold ml-[140px] mr-[200px] text-[#150B2B]'>
              <h3>Recipe Calories</h3>
          </div>
          <div className='flex text-center mr-[300px] mt-[10px] text-[#150B2BB3]'>
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
            <div>
              <input className='p-4 rounded-[50px] w-[260] bg-[#150B2B0D] h-[48px] text-lg font-normal ' placeholder='Search' type="text" />
            </div>
      
      </div>
  </div>
    );
};

export default Componentnav;