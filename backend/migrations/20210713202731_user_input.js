
exports.up = function(knex) {
  return knex.schema.createTable('user_input', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('input');
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_input');
};
