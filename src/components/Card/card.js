function Card({imagen,titulo,precio}){
    return(
        <div className="Card">
            <div className="Card__img">
                <img src={imagen}/>
            </div>
            <div className="Card__informacion">
                <h2>{titulo}</h2>
                <h4>{precio}</h4>
            </div>
        </div>
    );
}
export default Card;