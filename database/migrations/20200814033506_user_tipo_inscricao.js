
//registration type
exports.up = function(knex) {
    return knex.schema.createTable("user_registration_type",table=>{
        table.increments('id').primary();
        table.string('type').notNullable();
        table.integer('value').notNullable();
        table.bool('active').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_registration_type");  
};
