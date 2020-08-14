
exports.up = function(knex) {
    return knex.schema.createTable("user_estado",table=>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('sigla').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_estado");  
};
