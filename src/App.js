import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyCard from './Card';

function App() {
  return (
    <div className="App">
        <div className="container-fluid mt-3">
            <div className='row'>
                <div className='col-4'>
                    <MyCard className="MyCard"/>
                </div>
                <div className='col-4'>
                    <MyCard className="MyCard"/>
                </div>
                <div className='col-4'>
                    <MyCard className="MyCard"/>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default App;
