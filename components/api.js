// Private Key => eb229cd7d80182959c718d8ebb4239b875e7cee3
// Public Key => f736789c682d546c399cb7f456090095

// Character URL => 'https://gateway.marvel.com:443/v1/public/characters?&apikey=f736789c682d546c399cb7f456090095'

// (e.g. md5(ts+privateKey+publicKey)
// hash => 2bb6d1f719185fe552cc960838cefabf


let API = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f736789c682d546c399cb7f456090095&hash=2bb6d1f719185fe552cc960838cefabf'
let d = []

//  query params

fetch(API)
    .then(res => res.json())
    .then(data => d.push(data))
    .catch((error) => {
        console.log('Error: ', error)
    })

console.log(d)
console.log(d[0])