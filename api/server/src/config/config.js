require('dotenv').config();


module.exports = {

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'ujicobacrud',
    username: 'taufiq',
    password: 'hehehihi',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
/* 
  test: {
    database: 'ujicobacrud',
    username: 'taufiq',
    password: 'hehehihi',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: 'ujicobacrud',
    username: 'taufiq',
    password: 'hehehihi',
    host: '127.0.0.1',
    dialect: 'postgres'
  } */
};