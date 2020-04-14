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
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const newCar = req.body;
    if (newCar) {
        try {
            const inserted = await carsHelper.insert(newCar);
            if (inserted) {
                res.status(201).json(inserted);
            }
        } catch (error) {
            res.status(500).json({ message: 'error inserting new car to the server', error: error.message })
        }
    }
     else {
        res.status(401).json({ message: 'please provide new car details to insert'})
     }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    if (changes) {
        try {
            const updated = await carsHelper.update(id, changes)
            updated
            ? res.status(200).json(updated)
            : res.status(404).json({ message: 'no car found by that id' })
        } catch (error) {
            res.status(500).json({ message: 'server error', error: error.message });
        }
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await carsHelper.remove(id)
        deleted
        ? res.status(204).json({ message: 'item removed' })
        : res.status(204).json({ message: 'yes...the item was removed...'})
    } catch (error) {
        res.status(500).json({ message: 'error when trying to delete record from server', error: error.message });
    }
});

module.exports = router;
