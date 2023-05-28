# CMS TECH BLOG
![MIT LICENSE SHIELD](https://img.shields.io/badge/License-MIT-blue) 
![Nodejs](https://img.shields.io/badge/Nodejs-v8.0.2-green) 
![bcrypt](https://img.shields.io/badge/bcrypt-v5.1.0-brightgreen)
![connect-session-sequelize](https://img.shields.io/badge/connect--session--sequelize-v7.1.7-orange)
![dotenv](https://img.shields.io/badge/dotenv-v16.0.3-yellowgreen)
![express](https://img.shields.io/badge/express-v4.18.2-darkred)
![express-handlebars](https://img.shields.io/badge/express--handlebars-v7.0.7-lightblue)
![express-session](https://img.shields.io/badge/express--session-v1.17.3-red)
![mysql2](https://img.shields.io/badge/mysql2-v3.3.2-yellow)
![sequelize](https://img.shields.io/badge/sequelize-v6.31.1-purple)

## Description

Using Nodejs, Expressjs, Sequelize, MySQL, Express-Handlebars, and API's for session control, I have created a sample, fully working, blog style webapp. You can login, signup, add posts, edit posts, add comments and logged in user and as a guest. Posts are tagged with dates created and edited and comments are tagged with the date created

## Screenshots
<img width="750" alt="Screenshot 2023-05-28 at 1 46 19 PM" src="https://github.com/roketteere/cms-tech-blog/assets/1593262/7c9ce231-5e66-4484-8515-0f7eafd3b536">
<img width="749" alt="Screenshot 2023-05-28 at 1 45 41 PM" src="https://github.com/roketteere/cms-tech-blog/assets/1593262/7d7261d1-ae65-4c19-8b47-7420501003ca">
<img width="744" alt="Untitled" src="https://github.com/roketteere/cms-tech-blog/assets/1593262/8db8d250-d4ac-49ee-8f13-7f873d1f86dc">



## Requirements

Nodejs - https://nodejs.org/en
MySQL - https://www.mysql.com/

## Installation

1. Clone this repo `git@github.com:roketteere/cms-tech-blog.git`
2. cd into the root directory then install the required packages by using `npm i` 
3. Then you can use the provided seeds and seed the database

## Usage

Once you have installed the required packages, make sure to either add your enviroment variables to your database config `db/connection.js`
if you get connection errors other than your credentials,
Use `localhost` instead of `120.0.0.1` 
To get the DB running type the following command in the root directory:
`mysql`
You should see this:
`mysql> `
Now type ` source db/schema.sql`
This will create your database and you are now ready to seed the database by running:
`npm run seed` 
Then start the server by running:
`npm start`

## License

MIT

## Github

https://github.com/roketteere

## Contact

jxp489@gmail.com
