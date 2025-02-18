import { Objectif } from '../models';

class ObjectifController {
    async index(req,res) {

        const objectifs = await Objectif.findAll({ attributes: { exclude: ['createdAt', 'updatedAt']}})

        res.json( objectifs );
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let objectif = null;

        try {
            objectif = await Objectif.findOne({
                where: { id },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            });

            if(!objectif) {
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        res.json(objectif);
    }

    async add(req,res,next) {
        const body = req.body;

        try {
            const objectif = await Objectif.create( body );
            res.status(201).json(objectif);
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async edit(req,res,next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Objectif.update( body, { where: { id }});
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async delete(req,res,next) {
        const id = req.params.id;

        try {
            const deleted = await Objectif.destroy({ where: { id }});
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

export default new ObjectifController