const database = {
    bowlBuilder: {},    // Transient state

    /*
        All permanent state is below
    */
    proteins: [
        {
            id: 1,
            name: "Armadillo",
            price: 5.00,
            isAnimal: true
        },
        {
            id: 2,
            name: "Panda",
            price: 7.50,
            isAnimal: true
        },
        {
            id: 3,
            name: "Beef",
            price: 8.49,
            isAnimal: true
        },
        {
            id: 4,
            name: "Tofu",
            price: 4.33,
            isAnimal: false
        },
    ],
    vegetables: [
        {
            id: 1,
            name: "Green beans",
            price: 0.45,
            isGreen: true
        },
        {
            id: 2,
            name: "Bean sprouts",
            price: 0.7,
            isGreen: true
        },
        {
            id: 3,
            name: "Lima beans",
            price: 0.35,
            isGreen: true
        },
        {
            id: 4,
            name: "Beets",
            price: 0.5,
            isGreen: false
        },
    ],
    carbs: [
        {
            id: 1,
            name: "Udon noodles",
            price: 3.79,
            isGluten: true
        },
    ],
    sauces: [
        {
            id: 1,
            name: "Hedge Maze",
            price: 5.00,
            isSpicy: true
        },
    ],
    seasonings: [
        {
            id: 1,
            name: "Dragon Salt",
            price: 0.05,
            hasSodium: true
        },
    ],
    bowlSizes: [
        {
            id: 1,
            size: "Bucket",
        },
        {
            id: 2,
            size: "Bread Box",
        },
        {
            id: 3,
            size: "Rubbish Bin",
        },
    ],
    bowls: [

    ]
}

export const setProtein = (proteinId) => {
    database.bowlBuilder.proteinId = proteinId
}

export const setVeggies = (vegetableId) => {
    database.bowlBuilder.vegetableId = vegetableId
}

export const setCarbs = (carbId) => {
    database.bowlBuilder.carbId = carbId
}

export const setSauces = (sauceId) => {
    database.bowlBuilder.sauceId = sauceId
}

export const setSeasonings = (seasoningId) => {
    database.bowlBuilder.seasoningId = seasoningId
}

export const getOrders = () => {
    return database.bowls.map(bowl => ({...bowl}))
}

export const getProteins = () => {
    return database.proteins
    .map(protein => ({...protein}))
    .sort((a, b) => (a.name > b.name) ? 1 : -1)
    .reverse()
}

export const getVeggies = () => {
    return database.vegetables.map(veg => ({...veg}))
}

export const getSeasonings = () => {
    return database.seasonings.map(seasoning => ({...seasoning}))
}

export const getCarbs = () => {
    return database.carbs.map(carb => ({...carb}))
}

export const getSizes = () => {
    return database.bowlSizes.map(size => ({...size}))
}

export const getSauces = () => {
    return database.sauces.map(sauce => ({...sauce}))
}


