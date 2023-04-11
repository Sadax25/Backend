const { Router } = require(`express`)
const CartsManager = require(`../managerDaos/cartsManager`)
const ProductsManager = require(`../managerDaos/productsManager`)


const router = Router()
const cartsManager = new CartsManager
const productsManager = new ProductsManager


router.get(`/:cid`, async (req, res) => {
    try {
        const { cid } = req.params
        const findedCart = await cartsManager.getCartById(parseInt(cid))

        if (findedCart) return res.status(202).send({
            status: `Success`,
            payload: findedCart
        })
    } catch (error) {
        return res.status(400).send({
            status: `Failed`,
            message: `Error: No existe ningún carrito con ese ID`,
        })
    }
})

router.post(`/`, async (req, res) => {
    try {
        const cart = req.body
        const addedCart = await cartsManager.addCart(cart)

        if (addedCart === `Todos los campos son obligatorios`) {
            res.status(400).send({
                status: `Failed`,
                message: `Error: ${addedCart}`
            })
        } else {
            res.status(200).send({
                status: `Success`,
                payload: addedCart
            })
        }
    } catch (error) {
        return error
    }
})

router.post(`/:cid/product/:pid`, async (req, res) => {
    try {
        const { cid, pid } = req.params
        const findedProduct = await productsManager.getProductById(parseInt(pid))
    } catch (error) {
        return res.status(400).send({
            status: `Failed`,
            message: `Error: No se pudo agregar el producto`,
        })
    }
})


module.exports = router