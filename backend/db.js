const Pool = require('pg').Pool
const pool = new Pool({
    user: "rwweribdtucftw",
    password: "95b9c84ad7916a1d90f63f46026822b57b716cfc659aab497e1768b1dff4e5b1",
    host: "ec2-54-220-170-192.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d5di1vjunn31vs",
    ssl: {
        rejectUnauthorized: false
    }
})
module.exports = pool