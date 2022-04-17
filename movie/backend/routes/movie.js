const router = require('express').Router();

let Movie = require('../models/movies.model');

router.route('/').get((req, res) => {
    Movie.find()
    .then( movie=>res.json(movie))
    .catch(err=> res.status(400).json('Error: '+err));
});


router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description= req.body.description;
    const length= Number(req.body.length);
    const publishedyear= Date(req.body.publishedyear);
    const rate= Number(req.body.rate);
    
    const newMovie = new Movie({
        username,
        description,
        length,
        publishedyear,
        rate,
    });
    newMovie.save()
    .then(()=>res.json('Movie added'))
    .catch(err => res.status(400).json('Error'+err));
});

router.route('/:id').get((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then( movie=> res.json(movie))
    .catch(err => res.status(400).json('Error' + err));

});
router.route('/:id').delete((req, res) => {
    Movie.findByIdAndDelete(req.params.id)
    .then( ()=> res.json('Excersice deleted'))
    .catch(err => res.status(400).json('Error' + err));

});



router.route('/update/:id').post((req, res) => {
    Movie.findById(req.params.id)
    .then( movie => {
        movie.username = req.body.username;
        movie.description= req.body.description;
        movie.length= Number(req.body.length);
        movie.publishedyear= Date.parse(req.body.publishedyear);
        movie.rate= Number(req.body.rate);
        
        movie.save()
        .then(()=>res.json('Movie updated'))
        .catch(err => res.status(400).json('Error'+err));
    
    })
    .catch(err => res.status(400).json('Error' + err));

});

module.exports = router;