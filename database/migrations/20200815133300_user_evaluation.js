exports.up = function(knex) {
    return knex.schema.createTable("user_evaluation",table=>{
        table.increments('id').primary();
        table.string('observation');

        //foreign key do status da avaliação
        table.integer('evaluation_status_id')
    .notNullable()
    .references('id')
    .inTable('user_evaluation_status')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    //foreign key do resumo que está sendo avaliado
        table.integer('abstract_id')
    .notNullable()
    .references('id')
    .inTable('user_abstract')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_evaluation");  
};
