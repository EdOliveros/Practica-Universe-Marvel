import { header } from "../modules/header.js"
import { footer } from "../modules/footer.js"

export default function page(body) { 

    const app = document.getElementById('app')

    app.innerHTML = `
        ${header}
        ${body}
        ${footer}
    `
}