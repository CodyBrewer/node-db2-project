const router = require('express').Router();
const carsHelper = require('./cars-model');

router.get('/status', (req, res) => {
    res.json({status:"ka-chow"})
})

router.get('/', async (req, res) => {
    try {
        const cars = await carsHelper.get()
        cars
        ? res.status(200).json(cars)
        : res.status(404).json({ message: 'no cars in the database to get.'});
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const car = await carsHelper.get(id);
        car
        ? res.status(200).json(car) 
        : res.status(404).json({ message: `no car found by that id. The id sent is ${id}` });
    } catch (error) {
        res.status(500).json({ message: errror.message })
    }
})

module.exports = router;
