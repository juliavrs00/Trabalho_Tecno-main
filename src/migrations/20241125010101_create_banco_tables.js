exports.up = function (knex) {
  return knex.schema
    .createTable("banco_do_brasil_v2", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("itau_v2", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("itau_francesa", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("sicoob_v2", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("sicred_v2", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("sicred_v3", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("caixa", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("santander_v2", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("banrisul", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    })
    .createTable("inter", function (table) {
      table.increments("id").primary();
      table.time("horario").notNullable();
      table.string("resultado", 50);
      table.integer("tempo_resposta_ms").notNullable();
      table.timestamp("criado_em").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("banco_do_brasil_v2")
    .dropTableIfExists("itau_v2")
    .dropTableIfExists("itau_francesa")
    .dropTableIfExists("sicoob_v2")
    .dropTableIfExists("sicred_v2")
    .dropTableIfExists("sicred_v3")
    .dropTableIfExists("caixa")
    .dropTableIfExists("santander_v2")
    .dropTableIfExists("banrisul")
    .dropTableIfExists("inter");
};
