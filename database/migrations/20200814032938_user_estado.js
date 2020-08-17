
exports.up = function(knex) {
    return knex.schema.createTable("user_state",table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('abbreviation').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_state");  
};
