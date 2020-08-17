exports.up = function(knex) {
    return knex.schema.createTable("author",table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();

        //foreign key da instituição a qual o autor pertence
        table.integer('institution_id')
    .notNullable()
    .references('id')
    .inTable('user_institution')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("author");  
};
