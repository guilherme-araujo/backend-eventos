
//registration type
exports.up = function(knex) {
    return knex.schema.createTable("user_tipo_inscricao",table=>{
        table.increments('id').primary();
        table.string('tipo').notNullable();
        table.integer('valor').notNullable();
        table.bool('status').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_tipo_inscricao");  
};
