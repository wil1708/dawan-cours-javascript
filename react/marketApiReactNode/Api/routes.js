import express from 'express';
import force from './controller/ForceController';
import faiblesse from './controller/FaiblesseController';
import opportunite from './controller/OpportuniteController';
import menace from './controller/MenaceController';
import objectif from './controller/ObjectifController';
import produit from './controller/ProduitController';


const router = express.Router();
export default router;

router.get('/strategie/force', force.index);
router.get('/strategie/force/:id', force.detail);
router.get('/strategie/faiblesse', faiblesse.index);
router.get('/strategie/faiblesse/:id', faiblesse.detail);
router.get('/strategie/opportunite', opportunite.index);
router.get('/strategie/opportunite/:id', opportunite.detail);
router.get('/strategie/menace', menace.index);
router.get('/strategie/menace/:id', menace.detail);
router.get('/strategie/objectif', objectif.index);
router.get('/strategie/objectif/:id', objectif.detail);
router.get('/strategie/produit', produit.index);
router.get('/strategie/produit/:id', produit.detail);

router.post('/strategie/force', force.add);
router.post('/strategie/faiblesse', faiblesse.add);
router.post('/strategie/opportunite', opportunite.add);
router.post('/strategie/menace', menace.add);
router.post('/strategie/objectif', objectif.add);
router.post('/strategie/produit', produit.add);

router.route('/strategie/force/:id').put(force.edit).patch(force.edit);
router.route('/strategie/faiblesse/:id').put(faiblesse.edit).patch(faiblesse.edit);
router.route('/strategie/opportunite/:id').put(opportunite.edit).patch(opportunite.edit);
router.route('/strategie/menace/:id').put(menace.edit).patch(menace.edit);
router.route('/strategie/objectif/:id').put(objectif.edit).patch(objectif.edit);
router.route('/strategie/produit/:id').put(produit.edit).patch(produit.edit);

router.delete('/strategie/force/:id', force.delete);
router.delete('/strategie/faiblesse/:id', faiblesse.delete);
router.delete('/strategie/opportunite/:id', opportunite.delete);
router.delete('/strategie/menace/:id', menace.delete);
router.delete('/strategie/objectif/:id', objectif.delete);
router.delete('/strategie/produit/:id', produit.delete);