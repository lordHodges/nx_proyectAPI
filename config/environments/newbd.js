module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "root",
    password: "admin321",
    database: "new_finanzas_dev",
    host: "localhost",
    dialect: "mysql",
    logging: false,
  },
  SECRET: "lordhodges_generateToken",
};
