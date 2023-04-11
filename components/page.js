export default function page(page) {
    
    const app = document.getElementById('app')
    
    app.innerHTML = `
        ${myHeader}
        ${page}
        ${footer}
    `
}