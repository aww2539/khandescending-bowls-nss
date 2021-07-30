import { Proteins } from "./proteins.js"
import { Vegetables } from "./veggies.js"

export const KhanDescending = () => {

    const restaurantName = "Khan Descending"


    return `
    <h1>Welcome to ${restaurantName} (in case you didn't know where you were)</h1>

    <article class="options">
        <section class="section--options">
            <h2>Proteins</h2>
            ${ Proteins() }
        </section>       

        <section class="section--options">
            <h2>Vegetable</h2>
            ${ Vegetables() }
        </section>
    </article>
    `
}