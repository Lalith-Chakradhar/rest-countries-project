import {CustomProvider} from "./CustomContext";
import FilterData from "./components/FilterData";
import DisplayCountries from "./components/DisplayCountries";
import Header from './components/Header';

function App() {

  return (
    <>
       <CustomProvider>
          <Header/>
          <FilterData/>
          <DisplayCountries/> 
        </CustomProvider>
    </>
  )
}

export default App;
