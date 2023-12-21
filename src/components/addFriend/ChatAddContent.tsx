import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";

const ChatAddContent = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="add-content">
      <div className="add-content__container">
        <div className="title">
          <h2>Aucun message Correspondant</h2>
        </div>
        <div className="subtitle">
          <h5>Veuillez seléctionner une discussion</h5>
        </div>
        <div className="button">
          <a href="/accueil" className="a">
            {" "}
            <button className="btn">
              <FontAwesomeIcon icon={faCommentDots} className="mx-2" /> Voir le
              Chat
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatAddContent;
