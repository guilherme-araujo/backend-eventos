
exports.up = function(knex) {
    return knex.schema.createTable("user_cidade",table=>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('id_estado_id').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_cidade");  
};
