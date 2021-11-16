import React from 'react'
import './App.css'

function Reviews(){
    const users =[
      {
        "id":1,
        "name":"Masayoshi Setiawan",
        "Review":"The Price is so Cheap",
        "photo": "https://images.pexels.com/photos/8184274/pexels-photo-8184274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500"
      },
      {
        "id":2,
        "name":"Setiawan Mayashosi",
        "Review":"The Price is so Cheap",
        "photo" :"https://images.pexels.com/photos/8184274/pexels-photo-8184274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500"
      },
      {
        "id":3,
        "name":"Shosimaya AwanSeti",
        "Review":"The Price is so Cheap",
        "photo" :"https://images.pexels.com/photos/8184274/pexels-photo-8184274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500"
      },

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