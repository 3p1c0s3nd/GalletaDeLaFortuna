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
    '../fondo1.jpg',
    '../fondo2.jpg',
    '../fondo3.jpg',
    '../fondo4.jpg',
  ]
  const fondonuevo = randomArray(fondos);

  return (
    <>
      <div className="app" style={{backgroundImage: `url('${fondonuevo}')`}}>
        <h1 className="app__title">GALLETAS DE LA FORTUNA</h1> 
        <article className="app__card">
        <ComponentPhrase 
          objetwithdata={phrase} 
        />
        <ComponentButton
          setPhrase={setPhrase}
        />
        </article>
      </div>
    </>
  )
}

export default App
