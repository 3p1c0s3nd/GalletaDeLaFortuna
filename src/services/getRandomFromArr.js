//Funcion random de un arreglo
const randomArray = (arr) => {
   const randomIndex = Math.random() * arr.length;
   return arr[Math.floor(randomIndex)];
}


export default randomArray;