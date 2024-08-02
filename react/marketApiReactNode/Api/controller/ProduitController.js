import { Produit } from '../models';

class ProduitController {
    async index(req,res) {

        const produits = await Produit.findAll({ attributes: { exclude: ['createdAt', 'updatedAt']}})

        res.json( produits );
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let produit = null;

        try {
            produit = await Produit.findOne({
                where: { id },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            });

            if(!produit) {
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        res.json(produit);
    }

    async add(req,res,next) {
        const body = req.body;

        try {
            const produit = await Produit.create( body );
            res.status(201).json(produit);
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async edit(req,res,next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Produit.update( body, { where: { id }});
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async delete(req,res,next) {
        const id = req.params.id;

        try {
            const deleted = await Produit.destroy({ where: { id }});
            if(deleted === 0) {
                next();
                return;
            }
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }
}

export default new ProduitController