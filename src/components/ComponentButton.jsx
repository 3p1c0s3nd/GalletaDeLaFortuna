import phrases from '../utils/phrases.json'
import  randomArray  from '../services/getRandomFromArr'
import axios from 'axios'
import React from 'react'


const ComponentButton = ({setPhrase}) => {

    const ChangePhrase = () => {
        axios('https://api.quotable.io/random').then((res) => {
            
            const nuevafrase = res.data.content;
            setPhrase(nuevafrase);
            const frase = document.querySelector(".app__phrase");
            frase.textContent = nuevafrase;
            
        }).catch((error) => {
            console.log(error);
        })
        

        //const newpharse = randomArray(phrases);
        //setPhrase(newpharse);
       
    };


    return(
            <button className="app__btn" onClick={ChangePhrase}>Other Cookie</button> 
    );
}


export default ComponentButton;