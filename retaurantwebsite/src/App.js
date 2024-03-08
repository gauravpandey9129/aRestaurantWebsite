
import classes from './App.module.css'

import Items from './components/FoodItems/Items';
import Header from './components/Layout/Header';
import Summary from './components/RestrauntSummary/RestrauntSummary/Summary';

function App() {
  return (
    <div className={classes.bg} >
    
    <Header></Header>
    <Summary/>
    <Items/>
    </div>
  );
}

export default App;
