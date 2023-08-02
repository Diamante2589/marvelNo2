const timestamp=ts;
const apiKey=publicKey;
const hashValue=hashVal;
const marvelsGlobal = [];

const getMarvels = async () => {
    const url=`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    const marvels = responseJson.data.results;

    console.log(marvels);
    
    //crear una funcion para recorrer el arreglo de marvel

    for (let i = 0; i < marvels.length; i++){
          
        const marvel=marvels[i];
        const marvelUrl=marvel.urls;
        
        //le digo a js que vaya y busque elementos de una url(necesito un fetch)
        const response= await fetch(marvelUrl);
        const responseJson = await response.json();

        console.log(marvelUrl);

        

        //ahora necesito una manera de poner esto en un solo arreglo

        //const img =`${marvel.thumbnail["path"] + "." + marvel.thumbnail["extension"]}`;

       /* const marvelObject = {
            name: marvel.name,
            img: img,
        };
    */

     //   marvelsGlobal.push(marvelObject);
        
        

    }

   // console.log(marvelsGlobal);
   

 
    
   
}

//crear un arreglo que tenga nuestro primer nombre 


getMarvels();

