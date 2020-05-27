import React, { useState, Component } from 'react';
import axios from 'axios';

function Images(props) {
    const [showImg, setShowImg] = useState(null);
    
    function handleChange(event) {
        setShowImg({ ...showImg, file: (event.target.files[0])});
    }

    function SrcImage(porps) {
        function SendSnap() {
            let select_id = document.getElementById("select");
            let time = select_id.options[select_id.selectedIndex].value;
            
            return (
                <ShowSnap image={showImg.file} time={time}/>
            )
        }

        if (showImg != null) {
            return (
                <div>
                    <select id="select">
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <button className="sendsnap" onClick={SendSnap}><i className="fas fa-paper-plane"></i></button>
                </div>
            )
        }
        else {
            return false;
        }
    }

    function ShowSnap(props) {
        console.log("arriver");
        console.log(props);
        // const headers = {
        //     'token': "Y22G4NJ3HYwTQZTocgocV1Se"
        // }
        // const data = {
        //     'duration': 5,
        //     'to': 'test@hotmail.fr',
        //     'image': props.image
        // }
        
        // axios.post('http://snapi.epitech.eu/snap', data, {headers}).then( res => {
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // });
        // return true;
    }

    return (
        <div className="container my-5 text-center">
            <div className="snap">
                <SrcImage />
            </div>
            <label className="labelfile">
                <h2>Choose Image</h2>
                <input type="file" className="inputfile" onChange={handleChange} />
            </label>
        </div>
    );
}

export default Images;

// class App extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             file: null
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//           file: URL.createObjectURL(event.target.files[0])
//         })
//     }
    
//     render() {
//         return (
//             <div className="container my-5 text-center">
//                 <input type="file" onChange={this.handleChange} />
//                 <img src={this.state.file} width="350" />
//             </div>
//         );
//     }
// }

// export default App;



        // console.log(props.path);

        // let nuroImage = new Image;
        // let request = new XMLHttpRequest();
        // request.responseType = "blob";
        // request.onload = function() {
        //     console.log(URL.createObjectURL(this.response));
        //     nuroImage.src = URL.createObjectURL(this.response);
        //     document.body.appendChild(nuroImage);
        // }
        // request.open("GET", "http://snapi.epitech.eu/snap/15");
        // request.setRequestHeader("token", "Y22G4NJ3HYwTQZTocgocV1Se");
        // request.send();

// ---------------------------------------------------------------------------------------------------------------------

        // const headers = {
        //     'token': "Y22G4NJ3HYwTQZTocgocV1Se"
        // }
        // axios.get('http://snapi.epitech.eu/snap/15', {headers, responseType: 'blob'}).then( res => {
        //     let myImage = new Image;
        //     myImage.src = URL.createObjectURL(res.data);
        // })