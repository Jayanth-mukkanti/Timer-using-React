import React from "react";

function DestinationCard(props) {
    return (
        <>
            <div className="desination-Card text-center" id={props.id}>
                <img id="img-Card"
                    src={props.URL}
                />
                <h4 className="bg-white p-3"> {props.Name} </h4>
            </div>
        </>
    )
}
export default DestinationCard;