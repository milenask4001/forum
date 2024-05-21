import React from "react";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'



type AppContextType = {
  isFavorite: boolean;
 
}


export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const RedHeart = (
    <FontAwesomeIcon icon={faHeart} style={{ color: "#e01f1f" }} />
  );
  const TransparentHeart = (
    <FontAwesomeIcon icon={faHeart} style={{color: "#030303",}} />
  );
  

  return (
    <div>
      <button onClick={handleIsFavorite}>
        {isFavorite ? RedHeart : TransparentHeart}

   
      </button>
   
    </div>
  );
}

