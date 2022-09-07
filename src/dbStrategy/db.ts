// import dotenv from 'dotenv';
// import pg from 'pg';


// dotenv.config();
// const {Pool} = pg;
// export const connection = new Pool({
//     connectionString:process.env.DATABASE_URL
// });
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const client = new PrismaClient();
export default client;

