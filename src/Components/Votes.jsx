import { updateArticleVotes } from "./utils/api";
import { useEffect, useState } from "react";
import { Icon } from '@iconify/react';

export default function Votes({ currentVotes, setVotes, articleId }) {
  const [localVoteAmount, setLocalVoteAmount] = useState(0);
  const [isError, setIsError] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  function handleClick(e) {
    const buttonId = (e.currentTarget.id)
    if(buttonId === "up") {
        setLiked((prev) => {
            prev ? setLocalVoteAmount(0) : setLocalVoteAmount(1)
            return !prev
        })
    }
    else {
        setDisliked((prev) => {
            prev ? setLocalVoteAmount(0) : setLocalVoteAmount(-1)
            return !prev
        })
    }
  }

  useEffect(() => {
    updateArticleVotes(articleId, { "inc_votes": (localVoteAmount)  })
      .then((data) => {
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, [localVoteAmount]);

  
  return (
  <div className="vote-box">
    <button id="up" onClick={(e) => {handleClick(e)}} >
    <Icon icon="clarity:thumbs-up-solid" hFlip={true} color={liked ? "green" : "gray"}/>
    </button>
    <p>Votes : {currentVotes += localVoteAmount}</p>
    <button id="down" onClick={(e) => {handleClick(e)}} >
    <Icon icon="clarity:thumbs-up-solid" hFlip={true} vFlip={true} color={disliked ? "red" : "gray"}/>
    </button>
  </div>)
}


  
    
    