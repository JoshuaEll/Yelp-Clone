module.exports = {
  development: {
    url: 'postgresql://postgres:admin@localhost:5432/yelp',
    dialect: 'postgres',
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    url: process.env.DB_URL,
    dialect: 'postgres',
  }
};