module.exports = {
	PORT: process.env.PORT,
	DB: {
		username: "root",
		password: "nanco2121",
		database: "new_finanzas_dev",
		host: "mysqldb",
		dialect: "mysql",
		logging: false,
	},
	SECRET: process.env.SECRET,
	LOCAL: process.env.LOCAL,
};
