
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        // create auto incrmeent id,
        table.increments();
        // Create VIN Field, alphanumberic with max of 
        table.text('VIN', [17]).notNullable();
        // Make
        table.text('make').notNullable()
        // Create Model text
        table.text('model').notNullable();
        // Mileage
        table.integer('mileage').notNullable();
        table.text('transmission_type')
        table.text('transmission_status')
    })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
