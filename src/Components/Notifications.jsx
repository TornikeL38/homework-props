
import "./Notifications.css"

function Notifications(props){
    console.log(props)
    return(
        <div className="conteiner">
            <div className="lines" style={{backgroundColor: props.color}}></div>
            <div>
                <img className="icon" src={props.img} alt="" style={{backgroundColor: props.color}}/>
            </div>
            <div className="wrapper">
                <h2>{props.header}</h2>
                <p>
                    Order Placed Successfully. You can check order delivery status.
                </p>
            </div>

        </div>
    )
}

export default Notifications