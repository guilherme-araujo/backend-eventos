
exports.up = function(knex) {
    return knex.schema.createTable("user_country",table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('abbreviation').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("user_country");  
};
//comando para executar migrações:
//npx knex migrate:latest

//comando usado para juntar o db.default.sql com o database: (windows/powershell)
//obs: precisar estar dentro da pasta database
//sqlite3 database.sqlite3 -init db.default.sql