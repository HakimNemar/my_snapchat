import React from 'react';

function SendSnap(props) {

    // console.log(props.handleImg);

    function onRegisterClick(e) {
        e.preventDefault();
        
        let select_id = document.getElementById("select");
        let time = select_id.options[select_id.selectedIndex].value;
        let test = "mistertest";

        props.handleClick('send');
        props.handleSend({time, test});

    }

    return (
        <div className="px-5">
             <select id="select">
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            <button className="sendsnap" onClick={onRegisterClick}><i className="fas fa-paper-plane"></i></button>
        </div>
    );
}

export default SendSnap;