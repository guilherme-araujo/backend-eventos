
//payment situation
exports.up = function(knex) {
    return knex.schema.createTable("user_situacao_de_pagamento",table=>{
        table.increments('id').primary();
        table.string('descricao').notNullable();
        table.string('descricao_detalhada').notNullable();
        table.integer('code');
    });
    //obs: eu tentei deixar igual ao modelo do db.default.sql mas lá n tem 'code', então por enquanto eu só tirei o 'notNullable'
};
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_situacao_de_pagamento");  
};
