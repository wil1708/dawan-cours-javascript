import { Client, Vente, Produit } from '../models';

class ClientController {

    async index(req, res) {
        const vente = await Vente.findByPk(1, { include: [
            { model: Client },
            { model: Produit }
        ] });
        console.log(vente.Client.fullname);
        console.log(vente.Produit.libelle);


        const clients = await Client.findAll({attributes: { exclude: ['createdAt', 'updatedAt']}});
        
        res.render('client/index.html', { clients });
    }

    async add(req, res) {
        if(Object.keys(req.body).length !== 0){ 
            await Client.create(req.body);

            res.redirect('/clients');
            return;
        }

        res.render('client/edit.html');
    }

    async edit(req, res) {
        const client = await Client.findByPk(req.params.id ,{attributes: { exclude: ['createdAt', 'updatedAt']}});
        
        if(Object.keys(req.body).length !== 0){ 
            await Client.update(req.body, { where: { id: req.params.id } });

            res.redirect('/clients');
            return;
        }

        res.render('client/edit.html', { client });
    }

}

export default new ClientController();