class HomeController {

    index(req, res) {
        // let html = '<h1>Bienvenue sur notre application ExpressJS</h1>';
        // res.send(html);

        const content = '<b>Hello Express</b>';
        
        /**
         * { name: "John Doe" }
         * es6 => property shorthand
         * const name = "john";
         * { name } => { name: name }
         */
        res.render('home/index.html', { 
            content,
            name: 'John'
        });
    }

    params(req, res) {
        const name = req.query.name || null;
        
        res.render('home/params.html', { name });
    }

    url(req, res) {
        const id = req.params.id;

        res.render('home/url.html', { id });
    }

    form(req, res) {
        
        // si le form a été soumis
        if(Object.keys(req.body).length !== 0){ 
            console.log(req.body);

            res.redirect('/form');
            return;
        }
        
        res.render('home/form.html');
    }
}

export default new HomeController();