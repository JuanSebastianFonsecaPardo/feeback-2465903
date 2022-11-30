import Rating from "./Rating"
const NuevoFeedback = () =>{
    return(
        <div className="card">
            <form >
                <h2>Como calificarias el curso?</h2>
                <Rating />
                <div className="input-group">
                    <input type="text" placeholder="Escriba aca su comentario"/>
                    <button className="btn btn-primary">
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    )
}
export default NuevoFeedback