import { useState } from "react";
import {FaTimes} from "react-icons/fa";


const FeedBackItem = ({feedback,deleteFeedback}) => {

    return(
        <div className='card'>
            <div className='num-display'>
                { feedback.rating }
            </div>
            <div className='text-rating'>
                { feedback.text }
            </div>
            <button onClick={()=>deleteFeedback(feedback.id)} className="close">
                <FaTimes/>
            </button>
        </div>
    )
}
export default FeedBackItem