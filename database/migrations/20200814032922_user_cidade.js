
exports.up = function(knex) {
    return knex.schema.createTable("user_city",table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        
        table.integer('state_id')
    .notNullable()
    .references('id')
    .inTable('user_state')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_city");  
};
