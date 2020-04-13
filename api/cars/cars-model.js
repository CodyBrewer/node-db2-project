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

const getById = () => {}

const insert = () => {}

const update = () => {}

const remove = () => {}

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};
