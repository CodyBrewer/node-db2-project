
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:"3GNEC16Z05G139130", make: "Cheverolet", model:"Suburban 1500", mileage:100000, transmission_type:"automatic", transmission_status:"salvageed"},
        {VIN:"3GNCA13B49S528134", make: "Cheverolet", model: "HHR", mileage:100000, transmission_type: "automatic", transmission_status: "clean" },
        {VIN:"1GCEK19B67Z203233", make: "Cheverolet", model: "Silverado 1500", mileage:100000, transmission_type: "standard", transmission_status: "clean"}
      ]);
    });
};
