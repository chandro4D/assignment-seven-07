

const Info = (products) => {
    return (

        <div className="flex text-base font-medium text-[#878787] justify-between mt-[40px] mx-[45px]">
              <div>
                    <h2>{products.recipe_name}</h2>
                </div>
                <div>
                    <h2>preparing</h2>
                </div>
                <div>
                    <h2>calories</h2>
                </div>
                <div className="bg-[#0BE58A] text-[#150B2B] text-base font-medium rounded-[50px] w-[100px] h-[35px] p-1 text-center">
                    <button>Preparing</button>
                </div>
        </div>
    );
};

export default Info;