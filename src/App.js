import './components/container/container.css';
import UppercaseColor from './components/uppercase/uppercase';
import Button from './components/button.js/button';


function App() {
  return (
    
    <div className='container'>

      <UppercaseColor title='oi dev em dobro, sou sebastian !!'/>
      
      <Button label='Baixar CV'/>
  

    </div> 
  );
}

export default App;
