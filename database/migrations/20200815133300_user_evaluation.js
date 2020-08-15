exports.up = function(knex) {
    return knex.schema.createTable("user_evaluation",table=>{
        table.increments('id').primary();
        table.string('evaluation_comment');

        //foreign key do status da avaliação
        table.integer('avaliation_status_id')
    .notNullable()
    .references('id')
    .inTable('user_status_avaliacoes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_evaluation");  
};
