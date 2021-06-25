module.exports = (app) => {
    app.put('/qb/update/:id', (req, res) => {
        const id = req.params.id;
        const qb = req.body;
        const dbConnection = app.config.dbConnection();

        req.assert('name', 'name is missing').notEmpty();
        req.assert('team', 'team is missing').notEmpty();

        const err = req.validationErrors();

        if (err) {
            res.send(err);
            return;
        }
        
        dbConnection.query(`update qb_rating set ? where id=${id}`, qb, function(err, response) {
            if (err) res.send({ data: err });
            else res.sendStatus(201);
        });
    });
};