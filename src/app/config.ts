import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  defaultPass: process.env.DEFAULT_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  node_env: process.env.NODE_ENV,
};
