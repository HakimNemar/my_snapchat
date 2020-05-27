import React, { useState } from 'react';
import SendSnap from './sendSnap.component';
import ChoiceSnap from './choiceSnap.component';

function LoginIndex(props) {
    const [isCliqued, setIsCliqued] = useState(false);
    const [myImage, setMyImage] = useState(null);

    function handleImg(data) {
        setMyImage(data);
        // console.log(data);
        console.log(myImage);
    }
    // console.log(myImage);

    function handleChoice(choice) {
        choice = choice === 'snaped' ? <SendSnap handleClick={handleChoice} handleSend={handleSend} handleImg={myImage}/> : <ChoiceSnap />;
        setIsCliqued(choice);
    }

    function handleSend(data) {
        // console.log(data);
    }

    return (
        <div className="login-index">
            <div className="logo">
                <img src="https://cdn.frankerfacez.com/emoticon/145916/4"></img>
                <h1 className="text-center">Take a Snap</h1>
            </div>
            <div className="d-flex flex-column justify-content-center vh-100">
                {isCliqued || <ChoiceSnap handleClick={handleChoice} handleImg={handleImg}/>}
            </div>
        </div>
    );
}

export default LoginIndex;