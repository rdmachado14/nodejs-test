module.exports = (app) => {
    app.get('/qb/list/:id', (req, res) => {
        const id = req.params.id;
        const dbConnection = app.config.dbConnection();
        
        dbConnection.query(`select * from qb_rating where id=${id}`, function(err, response) {
            if (err) res.send({ data: err });
            else res.send({ data: response[0] });
        });
    });
};