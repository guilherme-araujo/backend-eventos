exports.up = function(knex) {
    return knex.schema.createTable("abstract-author",table=>{
        table.increments('id').primary();

        //foreign key do author
        table.integer('author_id')
    .notNullable()
    .references('id')
    .inTable('author')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    //foreign key do resumo
        table.integer('abstract_id')
    .notNullable()
    .references('id')
    .inTable('user_abstract')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("abstract-author");  
};
