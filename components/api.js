let url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f736789c682d546c399cb7f456090095&hash=2bb6d1f719185fe552cc960838cefabf';

let url_comics = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=f736789c682d546c399cb7f456090095&hash=2bb6d1f719185fe552cc960838cefabf';

let url_series= 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=f736789c682d546c399cb7f456090095&hash=2bb6d1f719185fe552cc960838cefabf';


export const getData = async()=>{
    try {
        const data = await fetch(url);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getDataComics = async()=>{
    try {
        const data = await fetch(url_comics);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const getDataSeries = async()=>{
    try {
        const data = await fetch(url_series);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}
