const db = require('../../data/dbConfig');

const get = (id) => {
    let query = db('cars')
    if (id) {
        return query
        .where({ id })
        .first()
        .then(car  => {
            if (car) {
                return car;
            } else {
                return null;
            }
        })
        .catch(err => {
            console.log(err)
        })
    } else {
        return query.then(cars => {
            return cars.map(car => car)
        })
    }
}

const insert = (car) => {
    let query = db('cars')
    if (car) {
        return query
            .insert(car)
            .then((insertedCar) => insertedCar)
            .catch((err) => {
                console.log(err)
            }) 
    }
}

const update = (id, changes) => {
    let query = db('cars')
    if ( id && changes ) {
        return query
            .where({ id })
            .update(changes)
            .then((updatedCar) => updatedCar)
            .catch( (err) => console.log(err))
    } else {
        console.log('no id or changes provided')
    }
}

const remove = (id) => {
    let query = db('cars')
    return query
        .where({ id })
        .del()
        .then((deletedCar) => deletedCar)
        .catch((err) => console.log(err));   
}

module.exports = {
    get,
    insert,
    update,
    remove,
};
