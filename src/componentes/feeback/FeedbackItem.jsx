import { useState } from "react";

const FeedBackItem = () => {
    
    //Trabajar los estados
    const [rating , setRating] = useState(1)
    const [texto , setTexto] = useState("Buen instructor debe mejorar los recursos")

    const cambiarNota = () => {
        setRating((prev)=>{
            return prev + 1
        })
    }

    const restarNota = () => {
        setRating((prev)=>{
            return prev - 1
        })
    }

    return(
        <div className='card'>
            <div className='num-display'>
                { rating }
            </div>
            <div className='text-rating'>
                { texto }
            </div>
            <button onClick={ cambiarNota } className=' btn btn-primary'>
            cambiar nota
            </button>
            <button onClick={ restarNota } className=' btn btn-primary'>
            restar nota
            </button>
        </div>
    )
}
export default FeedBackItem