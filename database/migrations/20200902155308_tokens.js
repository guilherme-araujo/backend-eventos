
exports.up = function (knex) {
    return knex.schema.createTable("tokens", function (table) {
        table.increments();
        table.string('user_id').notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('token');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("tokens");
};
