import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);

  //   console.log(props);
  const { id, name, info, image, price, removeTour } = props;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 250)}...`}

          <button type="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
