const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

// variables
const products = [{
        id: 1,
        name: 'IPad gen1 64G Wifi',
        price: 11000.0
    },
    {
        id: 2,
        name: 'IPad gen2 64G Wifi',
        price: 12000.0
    },
    {
        id: 3,
        name: 'IPad gen3 64G Wifi',
        price: 13000.0
    },
    {
        id: 4,
        name: 'IPad gen4 64G Wifi',
        price: 14000.0
    },
    {
        id: 5,
        name: 'IPad gen5 64G Wifi',
        price: 15000.0
    },
    {
        id: 6,
        name: 'IPad gen6 64G Wifi',
        price: 16000.0
    },
    {
        id: 7,
        name: 'IPad gen7 64G Wifi',
        price: 17000.0
    },
    {
        id: 8,
        name: 'IPad gen8 64G Wifi',
        price: 18000.0
    },
    {
        id: 9,
        name: 'IPad gen9 64G Wifi',
        price: 19000.0
    },
    {
        id: 10,
        name: 'IPad gen10 64G Wifi',
        price: 20000.0
    }
]


// function
const getProducts = (req, res, next) => {
    res.json(products)
}
const addProducts = (req, res, next) => {
    const reuestAddProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(reuestAddProduct)
    res.status(201).json(req.body)
    console.log(products);
}
const getProductById = (req, res, next) => {
    const i = products.findIndex(item => {
        return item.id == req.params.id
    })
    res.json(products[i])
}


// 'get' express
router.get('/', getProducts) // get all product :D
router.get('/:id', getProductById) // get 'product' of 'products' by id

// 'post' express
router.post('/', addProducts)

module.exports = router