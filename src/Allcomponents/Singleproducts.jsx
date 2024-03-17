import PropTypes from 'prop-types';
const Singleproducts = ({products}) => {
    return (
        <div>
             <div className=' w-[340px] h-[610px] bg-[#28282833] mt-[48px] pt-2                                                                                                                                                                                                           mb-10 ml-[140px] rounded-2xl'>
               <div>
                    <img className="rounded-xl ml-[10px] w-[320px] h-[230px]" src={products.recipe_image} alt="" />
               </div>
                <br/>
               <div>
                  <div>
                     <div className='text-center'>
                      <h3 className="text-xl font-semibold text-[#282828]">{products.recipe_name}</h3>
                      <h2 className="text-base font-normal text-[#878787]">{products.short_description}</h2>
                      
                      <br/>
                      <h3 className="text-[#282828] text-lg font-medium"> Ingredients:03</h3>
                      <br/>
                   </div>
                   <div className='ml-10'>
                       <ul className='text-[#878787] text-lg font-normal'>
                        <li> {products.ingredients}</li>
                       </ul>
                   </div>
                 </div>
              </div>
              <div className='flex justify-around mt-4 text-[#282828CC] text-base font-normal'>
                 <div>
                   <h3>{products.preparing_time}</h3>
                 </div>
                 <div>
                   <h2>{products.calories}</h2>
                 </div>
              </div>
              <div className='mt-8 ml-10'>
                <button className='w-[170px] h-[50px] bg-[#0BE58A] rounded-[50px]'>Want to Cook</button>
              </div>


           </div>
        </div>
    );
};

Singleproducts.propTypes = {
    products: PropTypes.object.isRequired

}

export default Singleproducts;

