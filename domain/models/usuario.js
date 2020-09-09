class Usuario {
  id = 0;
  nombre = null;
  apellido = null;
  nombreUsuario = null;
  hash = null;
  RolID = null;

  createdAt = null;
  updatedAt = null;
}
module.exports = Usuario;
/* 
sequelize model:create --name Course --attributes name:string,status:string

sequelize model:create --name Subject --attributes name:string description:string status:string

sequelize model:create --name Teacher --attributes name:string,lastname:string,biography:string,birthdate:date,email:string,username:string,password:string,status:string

sequelize model:create --name Section --attributes teacherId:integer,subjectId:integer,courseId:integer,status:string

sequelize model:create --name Student --attributes name:string,lastname:string,birthdate:date,email:string,username:string,password:string,status:string

sequelize model:create --name Registration --attributes sectionId:integer,studentId:integer,status:string

sequelize db:migrate --url "postgres://postgres:mysecretpassword@localhost:5432/school_dev"

*/
