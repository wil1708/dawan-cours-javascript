import express from "express";
import produit from "./controller/ProduitController";
import auth from "./controller/AuthenticationController";

import isAuthenticate from "./middleware/isAuthenticate";

const router = express.Router();
export default router;

router.get('/produit', produit.index);
router.get('/produit/:id', produit.detail);
router.post('/produit', isAuthenticate, produit.add);
router.route('/produit/:id')
    .put(isAuthenticate, produit.edit)
    .patch(isAuthenticate, produit.edit);
router.delete('/produit/:id', isAuthenticate, produit.delete);

router.get('/login', auth.login);