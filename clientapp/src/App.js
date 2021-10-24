import React, { useState, useEffect } from "react";
import Axios from "axios";

import CardComponent from "./Card";
import "./App.scss";

const App = () => {
  const [imageUrl, setImageUrl] = useState({});
  const [imageCloneUrl, setImageCloneUrl] = useState({});
  const [searchText, setSearchText] = useState("");
  const [imageLimit, setImageLimit] = useState(15);
  const [autoFocusValue, setAutoFocusValue] = useState(false);

  useEffect(() => {
    cardList();
  }, [imageLimit, searchText]);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset % 50 === 0) {
        setImageLimit(imageLimit + 10);
      }
    };
  }, [imageLimit]);

  const InputBox = () => {
    const handleInput = (e) => {
      if (!e.target.value) {
        setImageCloneUrl(imageUrl);
        setAutoFocusValue(false);
      }
      setAutoFocusValue(true);
      setSearchText(e.target.value);
    };

    return (
      <>
        <h1 style={{margin: "10px auto"}}> Please search for a GIF image </h1>
        <input
          value={searchText}
          autoFocus={autoFocusValue}
          className="cardInput"
          onChange={(e) => {
            handleInput(e);
          }}
          onBlur={() => setAutoFocusValue(false)}
          onScroll={() => setAutoFocusValue(false)}
        />
      </>
    );
  };

  const cardList = () => {
    if(searchText){
      Axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=fYR9IVYvYcmR7evN6StYVvyFxaq2lCjE&q=${searchText}`
      )
        .then((result) => {
          const imageUrlValue = result.data;
          console.log("imageLimit => ", imageUrlValue);
          setImageCloneUrl(imageUrlValue);
          return imageUrlValue;
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      Axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=fYR9IVYvYcmR7evN6StYVvyFxaq2lCjE&limit=${imageLimit}`
      )
        .then((result) => {
          const imageUrlValue = result.data;
          console.log("imageLimit => ", imageUrlValue);
          setImageUrl(imageUrlValue);
          setImageCloneUrl(imageUrlValue);
          return imageUrlValue;
        })
        .catch((error) => {
          console.log(error);
        }); 
    } 
  };

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
      <CardComponent imgData={imageCloneUrl} />
    </div>
  );
};

export default App;
