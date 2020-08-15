
exports.up = function(knex) {
    return knex.schema.createTable("user_pais",table=>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('sigla').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_pais");  
};
//comando para executar migrações:
//npx knex migrate:latest

//comando usado para juntar o db.default.sql com o database: (windows/powershell)
//sqlite3 database.sqlite3 -init db.default.sql