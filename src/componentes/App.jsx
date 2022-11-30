import Header from './feeback/Header';
// import FeedBackItem from './feeback/FeedbackItem';
import FeedBackList from './feeback/FeedbackList';
import FeedbackData from '../data/feeback';
import { useState } from 'react';
import NuevoFeedback from './feeback/NuevoFeedback';
 function App(){

    //Estado inicial de feedback
    const [ lista_feedback ,
            setListaFeedback] = useState(FeedbackData)
    
    //Metodo para eiminar una reseña
    const deleteFeedback=(id)=>{
        if(window.confirm('esta seguro de borrar la reseña')){
            //utilizar filter: filtrar los feedback que tengan id diferente al ingresarlo
            setListaFeedback(lista_feedback.filter((feedback) => feedback.id !== id))
        }
    }

    const headerStyles={
        backgroundColor: '#202142',
        color: '#ffffff'
    }


    return(
        <div className='container'>
            <NuevoFeedback />
            <Header 
                bgColor={headerStyles.backgroundColor}
                c = {headerStyles.color}
            />
            <FeedBackList 
                deleteFeedback = {deleteFeedback}
                lista_feedback={lista_feedback}
            />
            
        </div>
    )
}

export default App;