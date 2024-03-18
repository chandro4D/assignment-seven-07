

const Info = (products) => {
    return (

        <div className="text-center justify-around flex text-base font-medium text-[#878787] mt-[40px] mx-[45px]">
              <div className="mr-1">
                    <h2>{products.recipe_name}</h2>
                    <h2>Chicken Caesar Salad</h2>
                </div>
                <div  className="mr-1">
                    <h2>20 minutes</h2>
                </div>
                <div  className="mr-2">
                    <h2>400 calories</h2>
                </div>
                <div className="bg-[#0BE58A] text-[#150B2B] text-base font-medium rounded-[50px] w-[100px] h-[35px] p-1 text-center">
                    <button>Preparing</button>
                </div>
        </div>
    );
};

export default Info;