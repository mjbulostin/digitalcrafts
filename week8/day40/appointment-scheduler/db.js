const Pool = require("pg").Pool;
const password = require("./datakey")
console.log(password);
const pool = new Pool({
    user: "postgres",
    password: `${password}`,
    host: "localhost",
    port: 5432,
    database: "dr_appointment_development",
});

module.exports = pool;