// API : https://api.thecatapi.com/v1/images/search

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const CAT_BTN = document.getElementById('change-cat');

let getCats = async() => {
    try{
        let dados = await fetch(BASE_URL);
        let json = await dados.json();
        return json[0].url;
    }
    catch(e){console.log(e.message);}
}

const load = async()=>{
    const CAT_IMG = document.getElementById('cat');
    CAT_IMG.src = await getCats();
}

CAT_BTN.addEventListener('click',load);

load();