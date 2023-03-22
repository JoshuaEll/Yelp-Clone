module.exports = {
  development: {
    url: 'postgres://postgres:admin@localhost:5432/yelp',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres',
  }
}