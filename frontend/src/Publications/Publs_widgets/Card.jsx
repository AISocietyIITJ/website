import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = (props) => {
  const imgStyle = {
    backgroundImage: `url(${props.url})`,
    width: "310px",
    height: "180px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="pubs-card">
        <div className="pubs-card-overlay">
          <div className="pubs-card-desc">{props.desc}</div>
          <div className="pubs-card-links">
            <button className="pubs-card-github">
              <a href={props.github}>
                <FontAwesomeIcon icon={faGithub} size="2x" color="black" />{" "}
              </a>
            </button>
            <button className="pubs-card-paper">
              <a href={props.paper} >
                <i className="material-icons" style={{ color: "black"}}>
                  menu_book
                </i>{" "}
              </a>
            </button>
          </div>
        </div>
        <div className="pubs-card-image" style={imgStyle}></div>
        <div className="pubs-card-title">{props.title}</div>
        <div className="pubs-card-conference">{props.conference}</div>
        <div className="pubs-card-authors">{props.authors}</div>
        <div className="pubs-card-topics">{props.topics}</div>
      </div>
    </>
  );
};

export default Card;
