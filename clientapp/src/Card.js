import React from "react";

import "./App.scss";

const CardComponent = ({ imgData, key }) => {
  if (imgData?.data?.length > 0) {
    return (
      <>
        <div className="App">
          <section className="internalBox" key={key}>
            {imgData?.data?.map((data) => (
              <>
                <article>
                  <img
                    src={data.images.original.url}
                    title={data.title}
                    alt={data.title}
                    width="200px"
                    height="200px"
                  />
                  <h6>{data.title} </h6>
                </article>
              </>
            ))}
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="App">No Card Data To show</div>
      </>
    );
  }
};

export default CardComponent;
