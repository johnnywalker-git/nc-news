import { updateArticleVotes } from "./utils/api"
import { useEffect, useState } from "react"


export default function Votes({currentVotes,setVotes,articleId}) {
    const [localVoteAmount, setLocalVoteAmount] = useState(0)
    const [isError, setIsError] = useState(false)
    let apiVoteChange = 0

    function handleClick(e,voteChange) {
        if(localVoteAmount === 1 && voteChange === -1) {
            apiVoteChange = -2
        }
        else if (localVoteAmount === -1 && voteChange === 1) {
            apiVoteChange = 2
        }

        
        setLocalVoteAmount(voteChange)
        updateArticleVotes(articleId, { "inc_votes" : apiVoteChange})
            .then((data) => {
                setIsError(false)
                return data

            }).catch((err) => {
                const errMessage = err.message
                setIsError(errMessage)
                console.log(errMessage)
            })
            }

    useEffect(() => {
        updateArticleVotes(articleId, { "inc_votes" : localVoteAmount})
        .then((data) => {
            console.log(data)
        }).catch((err)=> {
            console.log("ERROR", err)
        })
    }, [localVoteAmount])

    return !isError ?
    ( 
    <div className="votes-single-article">
    <button onClick={(e) => {handleClick(e,1)}} disabled={localVoteAmount > 0}>Vote up</button>
    <p>Votes: {currentVotes + localVoteAmount}</p>   
    <button onClick={(e) => {handleClick(e,-1)}} disabled={localVoteAmount < 0}>Vote down</button>
    </div>) :
    <div className="vote-error">
    <p>{isError} Please try again</p>
    </div>
}