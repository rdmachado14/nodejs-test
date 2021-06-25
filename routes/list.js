module.exports = (app) => {    
    app.get('/qb/list', (req, res) => {
        const dbConnection = app.config.dbConnection();
        
        dbConnection.query('select * from qb_rating', function(err, response) {
            if (err) res.send({ data: err });
            else res.send({ data: response });
        });
    });
};