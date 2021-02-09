module.exports = {
	PORT: process.env.PORT,
	DB: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
		host: "localhost",
		dialect: "mysql",
		logging: false,
	},
	SECRET: process.env.SECRET,
	LOCAL: process.env.LOCAL,
};
