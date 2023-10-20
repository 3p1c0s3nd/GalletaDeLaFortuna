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
    'https://github.com/3p1c0s3nd/GalletaDeLaFortuna/blob/main/src/assets/fondo1.jpg?raw=true',
    'https://github.com/3p1c0s3nd/GalletaDeLaFortuna/blob/main/src/assets/fondo2.jpg?raw=true',
    'https://github.com/3p1c0s3nd/GalletaDeLaFortuna/blob/main/src/assets/fondo3.jpg?raw=true',
    'https://github.com/3p1c0s3nd/GalletaDeLaFortuna/blob/main/src/assets/fondo4.jpg?raw=true',
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
