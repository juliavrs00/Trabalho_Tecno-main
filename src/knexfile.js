module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1", // ou o host do seu banco
      user: "postgreSQL",
      password: "123",
      database: "postgres",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
