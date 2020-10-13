module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "root",
    password: "almendra",
    database: "ng_finanzasDev_db",
    host: "localhost",
    dialect: "mysql",
    logging: false,
  },
  SECRET: "lordhodges_generateToken",
};
