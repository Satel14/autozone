export const development = {
  username: process.env.DEV_DB_USER || 'perekotypole',
  password: process.env.DEV_DB_PASS || 'perekotypole',
  host: process.env.DEV_DB_HOST || 'cluster0.muzgs.azure.mongodb.net',
  database: process.env.DEV_DB_NAME || 'autozone',
}
export const production = {
  username: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASS,
  host: process.env.DEV_DB_HOST,
  database: process.env.DEV_DB_NAME,
}
