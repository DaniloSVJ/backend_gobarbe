import {createConnection} from 'typeorm'
const config  : any  =  {

    type:"postgres",
    host:"localhost",
    port:5432,
    username: "postgres",
    password: "123",
    datebase: "postgres",

    entities:[
        "./src/models/*ts"
    ],
    migrations:[
        "./src/database/migrations/*ts"
    ],
    cli:{
        migrationsDir:"./dist/database/migrations"
    }
}
createConnection(config )