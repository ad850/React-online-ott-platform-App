import React from 'react';



const Card = (props) => {

    

    return (<>

        <div className="Card">

            <img src={props.image} alt="google" width=" 250px" height="250px" />
            <div className="line">{props.title}</div>
            <div className="line">{props.sname}</div>




        </div>






    </>

    )



}


export default Card;