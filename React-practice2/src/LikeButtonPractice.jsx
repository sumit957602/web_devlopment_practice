import { useState } from "react";

function LikeButtonPractice() {
    let [isLiked, setIsLiked] = useState(false);

    let toggledLiked = () => {
        setIsLiked(!isLiked);
    }

    let likeStyle = {
        color : "red",
    };

    return(
        <div>
            <p onClick={toggledLiked}>
            {isLiked ? ( <i className="fa-solid fa-heart" style={likeStyle}></i> )  : ( <i className="fa-regular fa-heart"></i> )}
             </p>
        </div>
    );
}

export default LikeButtonPractice;