exports.up = function(knex) {
    return knex.schema.createTable("user_payment",table=>{
        table.increments('id').primary();
        table.string('transaction_code').notNullable();
        table.string('observation');

        //foreign key do usuário que efetuou o pagamento
        table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

        //foreign key do status de pagamento
        table.integer('payment_situation_id')
    .notNullable()
    .references('id')
    .inTable('user_payment_situation')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_payment");  
};
