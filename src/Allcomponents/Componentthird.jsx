import { useState } from 'react'
import { useEffect } from 'react'
import Singleproducts from './Singleproducts';
import Info from './Info';

const Componentthird = () => {
    
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect (() => {
        fetch("recipes.json")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            console.log(data)
        });
    },[]);

    const handleDelete = (recipe_id) =>{
        const newCart = cart.filter(products => (item => item.recipe_id != recipe_id));
        setCart(newCart);
    }

    const handleCart = (p) => {
        console.log(p)
       const isExist = cart.find((pd) => pd.recipe_id == p.recipe_id);
       if(!isExist){
        setCart([...cart,p])
       }
       else{
        alert("Already In Cart")
       }
    }


//  console.log(products)
return (
<div>
    <div className='flex justify-between'>
        {/* ----------------------------------------------------- */}
        <div className="card-container grid grid-cols-2 mr-[60px]">
            {products.map((pd) =>(
                <Singleproducts products={pd} key={products.recipe_id} handleCart={handleCart}></Singleproducts>
            ))}
          
        </div>
       
        {/* -------------------------------------------------------------------- */}
      
        <div className='w-[450px] h-[650px] bg-slate-400 mr-[100px] mt-[45px] rounded-2xl ml-[60px]'>
            <div className="text-center mt-[32px]">
                <h3 className='text-[#282828] text-2xl font-semibold'>Want to cook: <span>00</span> </h3>
            </div>
            <div className="flex text-base font-medium text-[#878787] justify-between mt-[40px] mx-[56px]">
                <div>
                    <h2>Name</h2>
                </div>
                <div>
                    <h2>Time</h2>
                </div>
                <div>
                    <h2>Calories</h2>
                </div>
                
            </div>
            {/*....................................................  */}
            <div >
                {
        
                   cart.map(products => <Info key={products.recipe_id}></Info>)
                }
                
            </div>
            {/* ------------------------------------------------------ */}
            <div className="text-center mt-[32px]">
                <h3 className='text-[#282828] text-2xl font-semibold'>Currently cooking: <span>00</span> </h3>
            </div>
            <div className="flex text-base font-medium text-[#878787] justify-between mt-[40px] mx-[56px]">
                <div>
                    <h2>Name</h2>
                </div>
                <div>
                    <h2>Time</h2>
                </div>
                <div>
                    <h2>Calories</h2>
                </div>
            </div>
            <div className="flex text-base font-medium text-[#878787] justify-around mt-[40px] mx-[56px]">
                <div>
                    <h2>Spicy Chicken Curry</h2>
                </div>
                <div>
                    <h2>15 min</h2>
                </div>
                <div>
                    <h2>150 calories</h2>
                </div>
                

                
            </div>
            <div className="flex gap-[30px] ml-[200px] mt-10">
                <div className="">
                    <h3>Total Time</h3>
                    <h3>00 minutes</h3>
                </div>
                <div>
                    <h3>Total Calories</h3>
                    <h3>00 Calories</h3>
                </div>
            </div>
            

        </div>
    </div>
</div>
 );
 }

export default Componentthird;