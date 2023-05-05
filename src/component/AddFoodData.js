import React, { useState } from 'react';
import './AddFoodData.css'

//
// import {db, storage} from '../Firebase/FirebaseConfig';
import { db } from '../Firebase/FirebaseConfig';
import { storage } from '../Firebase/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
//

const AddFoodData = () => {
   const [foodName, setFoodName] =useState('')
   const [foodDescription, setFoodDescription] = useState('')
   const [foodPrice, setFoodPrice] = useState('')
   const [foodCategory, setFoodCategory] = useState('')
   const [foodImage, setFoodImage] = useState(null)
   const [foodImageUrl, setFoodImageUrl] = useState('')
  
  const [foodType, setFoodType] = useState('')
  const [mealType, setMealType] = useState('')
  const [foodAddon, setFoodAddon] = useState('')
  const [foodaddonPrice, setFoodAddonPrice] =useState('')

   const [restaurantName, setRestaurantName] = useState('')
   const [restaurantEmail, setRestaurantEmail] = useState('')
   const [restaurantAddressStreet, setRestaurantAddressStreet] = useState('')
   const [restaurantAddressCity, setRestaurantAddressCity] = useState('')
   const [restaurantAddressPincode, setRestaurantAddressPincode] = useState('')
   const [restaurantPhone, setRestaurantPhone] = useState('')
   

  const handleSubmit = (e) => {
    e.preventDefault()

    if (foodImage == null){
      alert("Please Upload Image")
      return
    }
    else{
      const ImageRef = ref(storage,`foodImage/${foodImage.name}`)
      uploadBytes(ImageRef, foodImage)
      .then(()=>{
        alert('Image upload successfully')
        getDownloadURL(ImageRef)
        .then((url)=>{
              const foodData ={
                     foodName,
                     foodDescription,
                     foodPrice,
                     foodCategory,
                     foodImageUrl:url,
                     foodType,
                     mealType,
                     foodAddon,
                     foodaddonPrice,
                     restaurantName,
                     restaurantPhone,
                     restaurantEmail,
                     restaurantAddressStreet,
                     restaurantAddressCity,
                     restaurantAddressPincode,
                     id:new Date().getTime().toString()
                     
    }
   
    try{
      const docRef = addDoc(collection(db,"FoodData"),foodData)
      alert("Data Added Successfully", docRef.id)
    }
    catch(error){
      alert("Data Added Error" , error)
    }
        })
      })
      .catch((error)=>{
        alert('Image upload error', error)
      })
    }
    console.log(
      restaurantAddressStreet,restaurantPhone,mealType,foodAddon,foodName,
      foodDescription,foodPrice,foodCategory,foodImageUrl,foodType,restaurantName,
      restaurantPhone,restaurantEmail,restaurantAddressStreet,restaurantAddressCity,restaurantAddressPincode)

  }
  return (
    <div  className='form-outer'>
    <h1> AddFoodData </h1>
    <form className='form-inner'>
      <label>Food Name</label>
      <input type='text' name='food-name'
      onChange={(e)=>{setFoodName(e.target.value)}} />
      <br />

      <label>Food Description</label>
      <input type='text' name='food-description'
      onChange={(e)=>{setFoodDescription(e.target.value)}} />
      <br />

     <div className='form-row'>
      <div className='form-col'>
        <label>Food Price</label>
        <input type='number' name='food-price'
        onChange={(e)=>{setFoodPrice(e.target.value)}}  />
      </div>

      <div>
        <label>Food Type</label>
        <select name='foodType'
        onChange={(e)=>{setFoodType(e.target.value)}}>
           <option value='null'>Food Type</option>
           <option value='vegetarian'>Vegetarian</option>
           <option value="non-vegetarian">Nonvegetarian</option>
        </select>
      </div>
     </div>

       <div className='form-row'>
        <div className='form-col'> 
        <label>Food Category</label>
            <select name='Food category' onChange={(e)=>{setFoodCategory(e.target.value)}}>
              <option value='null'> Select Food Category</option>
              <option value='indian'>Indian</option>
              <option value ='chinese'>chinese </option>
              <option value ='italian'>Italian</option>
              <option value ='maxicon'>Maxicon</option>
              <option value ='american'>american</option>
              </select>  
        </div>

        <div className='form-col'>
           <label>Meal Type</label>
           <select name='meal_type' onChange={(e)=>{setMealType(e.target.value)}}>
            <option value = 'null'> Select Meal Type</option>
            <option value = 'starters'> Starters</option>
            <option value = 'launch'> Launch</option>
            <option value = 'dinner'>Dinner</option>
            <option value = 'liquid'> Desert</option>
           </select>
        </div>
       </div>

       <div className='form-row'>
        <div className='form-col'>
           <label>Food Addon</label>
           <input type='text' name='food-addon'
           onChange={(e)=>{setFoodAddon(e.target.value)}}/>
        </div>

        <div className='form-col'>
           <label>food add on Price</label>
           <input type='text' name='food-addon'
           onChange={(e)=>{setFoodAddonPrice(e.target.value)}}/>
        </div>

       </div>
        <label>Food Image</label>
         <input type='file' name='food-image' 
          onChange={(e)=>{setFoodImage(e.target.files[0])}} />
      <br />

    <div className='form-row'>
     <div className='form-col'>
      <label>Restaurant Name</label>
      <input type='text' name='restaurant_name' 
      onChange={(e)=>{setRestaurantName(e.target.value)}} />
      </div>

      <div className='form-col'>
      <label>Restaurant Phone</label>
      <input type='number' name='restaurant_phone'
      onChange={(e)=>{setRestaurantPhone(e.target.value)}}  />
      </div>
     </div>

     <div className='form-row'>
     <div className='form-col'>
      <label>Restaurant Email</label>
      <input type='text' name='restaurant_email' 
      onChange={(e)=>{setRestaurantEmail(e.target.value)}} />
      </div>

      <div className='form-col'>
      <label>Area Pin-code</label>
      <input type='number' name='restaurant_pincode'
      onChange={(e)=>{setRestaurantAddressPincode(e.target.value)}}  />
      </div>
     </div>

     <div className='form-row'>
     <div className='form-col'>
      <label>Restaurant Street/ Area Name</label>
      <input type='text' name='restaurant_street' 
      onChange={(e)=>{setRestaurantAddressStreet(e.target.value)}} />
      </div>

      <div className='form-col'>
      <label>Restaurant City</label>
      <input type='text' name='restaurant_city'
      onChange={(e)=>{setRestaurantAddressCity(e.target.value)}}  />
      </div>
     </div>

     
      <button onClick={handleSubmit}>Add Food </button>

    </form>
    </div>
  );
}

export default AddFoodData;
