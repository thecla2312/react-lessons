
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Booklists from './components/Books';
import User from './components/User';
import Usestatearray from './components/Usestatearray';
import Usestatebasics from './components/Usestatebasics';
import Usestateboolean from './components/Usestateboolean';
import Usestateobject from './components/Usestateobject';
import Conditional from './components/Conditional';
import First from './First';

const Second = () => {
  return (
    <>
      <h1 id="test className=test btn ">
        HEllOS
      </h1>
      <p style={{ color:  "red", backgroundColor: "blue "}}>Hello</p>
    </>
  );
};

// JSX RULES -
function App() {

  return (
    <>
      <Navbar />
      < Banner />
      <Books/>
      <User />
      <Usestatebasics />
      <Usestatearray />
      <Usestateboolean />
      <Usestateobject />
      <Conditional />

      
    </>
  );
};

export default App;
