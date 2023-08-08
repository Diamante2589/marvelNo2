const timestamp=ts;
const apiKey=publicKey;
const hashValue=hashVal;
const marvelsGlobal = [];

const getMarvels = async () => {
    const url=`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    const marvels = responseJson.data.results;
    const container =document.querySelector('#marvel-row');
    let contentHTML= '';

   console.log(marvels);

    // como toca traer info de varios lados , para ello es mejor crear un objeto
    

    for (let i = 0; i < marvels.length; i++){
          
        const marvel=marvels[i];
        const marvelUrl=marvel.urls[0].url;
        console.log(marvelUrl)

        contentHTML+=`<div class="col-md-4">
                 <a href="${marvelUrl}" target="_blank">
                 <img src="${marvel.thumbnail.path}.${marvel.thumbnail.extension}" alt="${marvel.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${marvel.name}</h3>
                </div>`;
      /*  
        //le digo a js que vaya y busque elementos de una url(necesito un fetch)
        const response= await fetch(marvelUrl);
        const responseJson = await response.json();

        console.log(responseJson);

        

        //ahora necesito una manera de poner esto en un solo arreglo

       const img =responseJson;

       const marvelObject = {
            name: marvel.name,
            img: img,
            */
        };  
        container.innerHTML=contentHTML;
    

     //   marvelsGlobal.push(marvelObject);
        
        

    }

   // console.log(marvelsGlobal);
   

 
    
   


//crear un arreglo que tenga nuestro primer nombre 


getMarvels();

