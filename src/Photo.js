import React from "react";
import Bounce from "react-reveal/Bounce";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <Bounce bottom right delay={1000} duration={1000}>
      <article className="photo">
        <img src={regular} alt={alt_description} />
        <div className="photo-info">
          <div>
            <h4>{name}</h4>
            <p>{likes} likes</p>
          </div>
          <a href={portfolio_url}>
            <img src={medium} alt={name} className="user-img" />
          </a>
        </div>
      </article>
    </Bounce>
  );
};

export default Photo;
