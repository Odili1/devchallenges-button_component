// import logo from './logo.svg';
import './App.css';
import {Buttons} from './components/button';



function App() {
  return (
    <div className='container'>
      <h2>Buttons</h2>
      <div className='section'>
        <div className='row'>
          <Buttons variant="default" text="Default" />
        </div>
        <div className='row'>
          <Buttons variant="outline" text="Default" />
        </div>
        <div className='row'>
          <Buttons variant="text" text="Default"/>
        </div>
        <div className='row'>
          <Buttons variant="disableShadow" text="Default"/>
        </div>
        <div className='row'>
          <Buttons disabled text="Disabled"/>
          <Buttons variant="text" disabled text="Disabled" />
        </div>
        <div className='row'>
          <Buttons startIcon={"shopping_cart_checkout"} text="Default" />
          <Buttons endIcon={"shopping_cart_checkout"} text="Default" />
        </div>
        <div className='row'>
          <Buttons size="sm" text="Default" />
          <Buttons size="md" text="Default" />
          <Buttons size="lg" text="Default" />
        </div>
        <div className='row'>
            <Buttons color="default" text="Default" />
            <Buttons color="primary" text="Default"/>
            <Buttons color="secondary" text="Secondary"/>
            <Buttons color="danger" text="Danger" />
        </div>
      </div>
    </div>
  );
}

export default App;


