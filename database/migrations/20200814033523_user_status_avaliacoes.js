
//status of the evaluation
exports.up = function(knex) {
    return knex.schema.createTable("user_evaluation_status",table=>{
        table.increments('id').primary();
        table.string('status').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_evaluation_status");  
};
