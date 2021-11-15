import React from 'react'
import './App.css'

function Reviews(){
    const users =[
      {
        "id":1,
        "nama":"Masayoshi Setiawan",
        "Review":"The Price is so Cheap",
        "photo": ""
      },
      {
        "id":2,
        "nama":"Setiawan Mayashosi",
        "Review":"The Price is so Cheap",
        "photo" :""
      }
    ]; 
    const listReview = users.map((itemReview) =>
    <div className="item">
    <img src= {itemReview.photo}/>
    <div className="user">
      <h3>{itemReview.name}</h3>
      <p>{itemReview.review}</p>
    </div>
  </div>
    );
    return(
      <div className="Review-box">
         <h2>Reviews</h2>
         {listReview}
         </div>
    );
  }

  export default Reviews;