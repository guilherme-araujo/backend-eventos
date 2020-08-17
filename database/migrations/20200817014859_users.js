exports.up = function(knex) {
    return knex.schema.createTable("users",table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('course').notNullable();
        table.string('adress').notNullable();
        table.string('phone').notNullable();

        //foreign do tipo de registro do usuário
        table.integer('registration_type_id')
    .notNullable()
    .references('id')
    .inTable('user_registration_type')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

        //foreign key do país do usuário
        table.integer('country_id')
    .notNullable()
    .references('id')
    .inTable('user_country')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

        //foreign key do estado do usuário
        table.integer('state_id')
    .notNullable()
    .references('id')
    .inTable('user_state')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

        //foreign key da cidade do usuário
        table.integer('city_id')
    .notNullable()
    .references('id')
    .inTable('user_city')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");  
};
