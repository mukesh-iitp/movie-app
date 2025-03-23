import React from "react";
import HeadingOne from "./HeadingOne";
import HeadingTwo from "./HeadingTwo";
import MoiveList from "./MovieList";
import Navbar from "./NavbarModule";
//import Student from "./Student";

class App extends React.Component{

  render(){

    return(
      <>
        <Navbar/>
        <MoiveList/>
      </>
    )

  }

}

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <MoiveList/>


//     {/* <h1>Students Data</h1>
//     <Student sname="Alexa" marks="80"/>
//     <Student sname="Siri" marks="90"/>
//     <Student sname="Google" marks="88"/>
//     <Student/> */}
    
    
//     {/* <HeadingOne/>
//     <HeadingTwo/> */}
    
//     </>
//   );
// }

// Student.defaultProps= {
//   sname : "Student",
//   marks : "N.A."
// }

export default App;