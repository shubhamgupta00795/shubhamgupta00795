import React, { useState, useEffect } from "react";
import Axios from "axios";

import CardComponent from "./Card";
import "./App.scss";

const App = () => {
  const [imageUrl, setImageUrl] = useState({});
  const [name, setName] = useState('');
  const [imageLimit, setImageLimit] = useState(15);

  useEffect(() => {
    cardList();
  }, [imageLimit]);

  useEffect(() => {
    window.onscroll = () => {
      if((window.pageYOffset % 50) === 0){
        setImageLimit(imageLimit+10)
      }
    }
  }, [imageLimit]);

const InputBox = () =>  {

  const handleInput = (e) => {
    setName(e.target.value);
  }

  return <> 
  <h1> Hello Sample Test </h1>
    <input value={name} className="cardInput" onChange={(e) => { handleInput(e) }} />
  </>
}

  const cardList = () => {
      Axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=fYR9IVYvYcmR7evN6StYVvyFxaq2lCjE&limit=${imageLimit}`
      )
        .then(result => {
          const imageUrlValue = result.data
            console.log("imageLimit => " ,imageUrlValue)
            setImageUrl(imageUrlValue)
            return imageUrlValue
        })
        .catch((error) => {
          console.log(error);
        });
  }
  
  return (
    <div>
      <div
        style={{
          background: "black",
          color: "#fff",
          textAlign: "left",
          padding: "0px 0px 0px 5px",
          height: "50px",
        }}
      >
        <h1 style={{ margin: "0px" }}>Sample Text</h1>
      </div>
      <div className="App">
        <InputBox />
      </div>
      <CardComponent imgData={imageUrl}/>
    </div>
  );
};

export default App;
