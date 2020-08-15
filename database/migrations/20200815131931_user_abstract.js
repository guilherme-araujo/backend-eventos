exports.up = function(knex) {
    return knex.schema.createTable("user_abstract",table=>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('text').notNullable();
        table.string('keywords').notNullable();

        //foreign key do usuário que fez o resumo
        table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_abstract");  
};
