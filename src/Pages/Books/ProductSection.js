import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ProductSection = ({ productDetails, setModalBook }) => {

 const { user } = useContext(AuthContext)
 const navigate = useNavigate()
 const locations = useLocation()


 const handleBuyNow = () => {
  console.log("buy now clicked");
  if (user) {
   console.log("Calling setModalBook");
   setModalBook(productDetails);
  } else {

   navigate('/login', { state: { from: locations } });
  }
 };

 const { _id, name, status, summery, resalePrice, originalPrice, yearOfPurchase, yearOfUse, sellerEmail, sellerName, sellerPhone, img, location, genre, post } = productDetails

 return (
  <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
   <>

    <img src={img} alt="Movie" className='' />
   </>
   <div className="card-body">
    <h2 className="card-title font-bold text-5xl">{name}</h2>
    <h3 className='font-bold'>About this item:-</h3>
    <h5 className='text-xl m-0'>{summery}</h5>

    <div className='grid grid-cols-2 gap-5 my-3'>

     <div>
      <p><span className='font-semibold'>Seller Name:</span> {sellerName}</p>
      <p><span className='font-semibold'>Location:</span> {location}</p>
      <p><span className='font-semibold'>Original Price :</span> <span className='text-yellow-500'>$</span>{originalPrice}</p>
      <p><span className='font-semibold'>Reselling Price: </span> <span className='text-yellow-500'>$</span>{resalePrice}</p>
     </div>

     <div>
      <p><span className='font-semibold'>Seller Email:</span> {sellerEmail}</p>
      <p><span className='font-semibold'>Contact:</span> {sellerPhone}</p>
      <p><span className='font-semibold'>Year of Purchase: </span>{yearOfPurchase}</p>
      <p><span className='font-semibold'>Year of Used:</span> {yearOfUse}</p>
     </div>

    </div>

    <div className="card-actions justify-end">
     <label htmlFor="book" className="btn btn-primary " onClick={handleBuyNow}>Proceed to checkout</label>
    </div>
   </div>
  </div>


 );
};

export default ProductSection;