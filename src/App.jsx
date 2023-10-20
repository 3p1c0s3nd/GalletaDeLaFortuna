import { useState  } from 'react'
import phrases from './utils/phrases.json'
import  randomArray  from './services/getRandomFromArr'
import ComponentPhrase  from './components/ComponentPhrase'
import ComponentButton  from './components/ComponentButton'
import './App.css'



function App() {
  const [phrase, setPhrase] = useState(randomArray(phrases));
  //console.log(phrase);
  const fondos = [
    './assets/fondo1.jpg',
    './assets/fondo2.jpg',
    './assets/fondo3.jpg',
    './assets/fondo4.jpg',
  ]
  const fondonuevo = randomArray(fondos);

  return (
    <>
      <div className="div__container" style={{backgroundImage: `url(${fondonuevo})`}}>
        <h1 className="h1__title spaces">GALLETAS DE LA</h1> <h1 className="h1__title"> FORTUNA</h1>
        <ComponentPhrase 
          objetwithdata={phrase} 
        />
        <ComponentButton
          setPhrase={setPhrase}
          fondos={fondos}
        />
      </div>
    </>
  )
}

export default App
