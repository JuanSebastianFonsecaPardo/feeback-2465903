import Feedback from "./FeedbackItem"

const FeedbackList = ({lista_feedback, deleteFeedback}) => {
    return(
        <div className="feeedback-list">
            {/* Recorrer el arreglo de feedback */}
            {lista_feedback.map((feedback) =>(
                <Feedback
                    deleteFeedback={deleteFeedback}
                    key={feedback.id}
                    feedback={feedback}
                />
            ))}
        </div>
    )
}
export default FeedbackList