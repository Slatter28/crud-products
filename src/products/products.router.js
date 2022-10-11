const {Router} = require('express');
const router = Router();
const productService = require('./products.services')


router.get('/',productService.getAllProducts);
router.post('/',productService.postProduct);
router.get('/:id',productService.getProductById);
router.patch('/:id',productService.patchProduct);
router.delete('/:id',productService.deleteProduct);


module.exports = router;