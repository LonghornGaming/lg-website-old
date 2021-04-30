import {Container} from "react-bootstrap";
import images from '../assets/images';
import React from "react";

class MegaMenu extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <Container>
                    <ul>
                        <li>
                            <a>
                                <img src={images.apexLegends} alt={images.apexLegends}/>
                            </a>
                            Apex Legends
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}

// function esportsDrop() {
//     console.log("here")
//         return(
//             <div>
//                 <h1>Test</h1>
//                 {/*<Container>*/}
//                 {/*    <ul>*/}
//                 {/*        <li><a href="https://google.com"><img src={images.apexLegends} alt={images.apexLegends}>Apex Legends</img></a></li>*/}
//                 {/*    </ul>*/}
//                 {/*</Container>*/}
//             </div>
//         );
// }

export default MegaMenu;