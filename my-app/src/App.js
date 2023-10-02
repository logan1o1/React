import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    //the entire thing (div) is called the jsx
    //className, htmlFor, tabIndex
    //When using js we use {}
    <>
      <Navbar title="my app" aboutSite="links" />
      <div className="container">
        <TextForms/>
      </div>
    </>
  );
}

export default App;
