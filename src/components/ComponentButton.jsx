import phrases from '../utils/phrases.json'
import  randomArray  from '../services/getRandomFromArr'



const ComponentButton = ({setPhrase}) => {

    const ChangePhrase = () => {
       /* fetch('https://api.quotable.io/random').then((response) => {
            return response.json();
        }).then((data) => {
            const nuevafrase = data.content;
        }).catch((error) => {
            console.log(error);
        })*/

        const newpharse = randomArray(phrases);
        setPhrase(newpharse);
       
    };


    return(
        <div className="div__button">
            <button className="button__phrase" onClick={ChangePhrase}>ver otro</button> 
        </div>
    );
}


export default ComponentButton;