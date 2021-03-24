import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
// Components
import PropertiesList from './PropertiesList';
import Search from './Search';
// Main App style
import './App.css';



function App(){

  /* This is example of how to fetch data from API */
  const [propertyData, setPropertyData] = useState(null);
  const [query, setQuery] = useState(null);

  const handleCallback = (search) => {
    setQuery(search);
  }

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("/lrProperty/"+query);
      const json = await resp.json();

      if(json.success)
        setPropertyData(json.lrProperty)      
    }
    
    fetchData();
  }, [query]);
  /* end example */

  return (
    <div className="App">
      <header className="App-header">
        <Search callback = {handleCallback}/>
        <PropertiesList propertiesList={propertyData}/>
      </header>
    </div>
  );
}

export default App;
