module.exports = (app) => {
    app.post('/qb/create', (req, res) => {
        const qb = req.body;
        const dbConnection = app.config.dbConnection();

        req.assert('name', 'name is missing').notEmpty();
        req.assert('team', 'team is missing').notEmpty();
        req.assert('pass_attempts', 'pass_attempts is missing').notEmpty();
        req.assert('pass_attempts', 'pass_attempts must be integer').isInt();
        req.assert('pass_completions', 'pass_completions is missing').notEmpty();
        req.assert('pass_completions', 'pass_completions must be integer').isInt();
        req.assert('pass_yards', 'pass_yards is missing').notEmpty();
        req.assert('pass_yards', 'pass_yards must be integer').isInt();
        req.assert('touchdowns', 'touchdowns is missing').notEmpty();
        req.assert('touchdowns', 'touchdowns must be integer').isInt();
        req.assert('interceptions', 'interceptions is missing').notEmpty();
        req.assert('interceptions', 'interceptions must be integer').isInt();

        const err = req.validationErrors();

        if (err) {
            res.send(err);
            return;
        }
        
        dbConnection.query('insert into qb_rating set ?', qb, function() {
            res.sendStatus(201);
        });
    });
};
