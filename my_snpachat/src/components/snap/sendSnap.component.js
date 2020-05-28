import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SendSnap(props) {
    let url = URL.createObjectURL(props.imageFile);
    const [userList, setUserList] = useState([]);
    const headers = {
        'token': 'Y22G4NJ3HYwTQZTocgocV1Se'
    };

    useEffect(() => {
        axios.get('http://snapi.epitech.eu/all', { headers }).then(res => {
          setUserList(res.data.data)
        })
      }, []);

    function headersSnap() {
        let duration = document.getElementById("selectDuration").value;
        let recipient = document.getElementById("selectRecipient").value;
    
        const headers = {
            'token': "Y22G4NJ3HYwTQZTocgocV1Se"
        }
        const data = {
            'duration': duration,
            'to': recipient,
            'image': props.imageFile
        }
          
        axios.post('http://snapi.epitech.eu/snap', data, {headers}).then( res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });

        props.handleClick('send');
    }
   
    return (
        <div className="px-5 test">
            <img src={url} className='apercuSnap'/>
             <select id="selectDuration">
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <select id="selectRecipient">
                {/* <option value="">---- Select Recipient ----</option> */}
                {userList.map(e => (<option key={e.email}>{e.email}</option>))}
            </select>
            <button className="sendsnap" onClick={headersSnap}>Send <i className="fas fa-paper-plane"></i></button>
        </div>
    );
}

export default SendSnap;