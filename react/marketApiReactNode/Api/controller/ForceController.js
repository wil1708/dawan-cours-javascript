import { Force } from '../models';

class ForceController {
    async index(req,res) {

        const forces = await Force.findAll({ attributes: { exclude: ['createdAt', 'updatedAt']}})

        res.json( forces );
    }

    async detail(req, res, next) {
        const id = req.params.id;
        let force = null;

        try {
            force = await Force.findOne({
                where: { id },
                attributes: {exclude: ['createdAt', 'updatedAt']}
            });

            if(!force) {
                next({ status: 404, message: "Cette ressource n'existe pas."});
                return;
            }
        } catch(e) {
            next({ status: 500, message: e.message });
            return;
        }
        res.json(force);
    }

    async add(req,res,next) {
        const body = req.body;

        try {
            const force = await Force.create( body );
            res.status(201).json(force);
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async edit(req,res,next) {
        const id = req.params.id;
        const body = req.body;

        try {
            await Force.update( body, { where: { id }});
            res.status(204).json();
        } catch(e) {
            next({ status: 500, message: e.message});
        }
    }

    async delete(req,res,next) {
        const id = req.params.id;

        try {
            const deleted = await Force.destroy({ where: { id }});
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

export default new ForceController