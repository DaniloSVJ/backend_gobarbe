"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var config = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    datebase: "db_geleilate",
    entities: [
        "./src/models/*js"
    ],
    migrations: [
        "./src/database/migrations/*js"
    ],
    cli: {
        migrationsDir: "./dist/database/migrations"
    }
};
(0, typeorm_1.createConnection)(config);
