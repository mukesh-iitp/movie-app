import MoiveList from "./MovieList";
import Student from "./Student";

function App() {
  return (
    <>
    <h1>Movie App</h1>
    <MoiveList/>

    <hr/>
    <h1>Students Data</h1>
    <Student sname="Alexa" marks="80"/>
    <Student sname="Siri" marks="90"/>
    <Student sname="Google" marks="88"/>
    <Student/>
    </>
  );
}

Student.defaultProps= {
  sname : "Student",
  marks : "N.A."
}

export default App;