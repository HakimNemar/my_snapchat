import React from 'react';

function ChoiceImage(props) {

    function onRegisterClick(e) {
        props.handleClick('snaped');
        props.handleImg(e.target.files[0]);
    }

    return (
        <div className="px-5">
            {/* <button type="button" className="btn btn-warning btn-lg btn-block mb-4" onClick={onRegisterClick}>Sign up</button> */}
            <label className="labelfile">
                <h2>Choose Image</h2>
                <input type="file" className="inputfile" onChange={onRegisterClick}/>
            </label>
        </div>
    );
}

export default ChoiceImage;