import React from 'react';
import './App.css';
import ReviewItems from './Reviews'

function App() {



  return (
    <div className="parentBox">
      <PhotoProduct />
      <ProductInfo isDiscount="coming" category="Holiday" shoesName="Blue Marine" price="Rp.1.500.000" />
      <ReviewItems/>
    
    
    </div>
  );
}




function PhotoProduct(){
  return (
      <div className="fotoProduct">
      <img src="fotoProduct1.jpg"/>
      </div>
  );
}

function CheckDiscount(props){
  const {isDiscount} =props;
    if (isDiscount === "yes"){
    return(
      <p>Discount Available</p>
      );
    }
    else if (isDiscount === "coming"){
      return(
        <p>Discount Coming Soon</p>
        );
      }
    else{
      return(
        <p>Not Available Discount</p>
      );

    }
  
}


function ProductInfo (props) {

  const {category, shoesName, price, isDiscount} =props;
  const benefits = ["Be Equipped With Boost", "Most Comfort"]
  const listBenefits = benefits.map((itemBenefit) =>
  <li>{itemBenefit}</li>
  );

  return(
   <div>
      <div className="description">
        <p className="cate">{category}</p>
        <h1 className="title">{shoesName}</h1>
        <p className="price">{price}</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="info">
        A souped-up, speed-oriented version of the Pegasus, 
        the Peg Turbo keeps the winning combo of ZoomX and 
        React foams found in the first generation. Together 
        they deliver exceptional shock absorption and energy
         return, so the shoe feels comfortable and fast.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => AddProduct(shoesName,e)} href="#">Buy Now</a>
      </div>
   </div>
  );
}

function AddProduct(e){
  return console.log("Buying Product " + e)
}

export default App;
