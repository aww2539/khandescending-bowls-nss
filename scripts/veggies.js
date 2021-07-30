import { getVeggies, setVeggies } from "./database.js"

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "vegetable") {
            setVeggies(parseInt(changeEvent.target.value))
        }
    }
)


export const Vegetables = () => {
    const allVegetables = getVeggies()
    let html = "<ul class='vegetables ul--options'>"

    const vegetableListItemsString = allVegetables
        .map(        
            // The end result of this method will be an array of strings
            (vegetableObject) => {
                return `<li class='vegetable'>
                    <input type="radio" name="vegetable" value="${vegetableObject.id}" />${vegetableObject.name}
                </li>`
            }
        )
        .join("")

    html += `${vegetableListItemsString}</ul>`

    return html
}
