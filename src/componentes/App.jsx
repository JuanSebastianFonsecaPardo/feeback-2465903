import Header from './feeback/Header';
import FeedBackItem from './feeback/FeedbackItem';
 function App(){

    const headerStyles={
        backgroundColor: '#c7c7c7',
        color: '#000'
    }


    return(
        <div className='container'>
            {/* props par aingresar info al componente */}
            <Header 
                bgColor={headerStyles.backgroundColor}
                c = '#000'
            />
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />
            <FeedBackItem />
            
        </div>
    )
}

export default App;