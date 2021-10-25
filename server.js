const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const db = require('./db/connection');
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});

inquirer
    .prompt([
        {
            name: 'option',
            type: 'list',
            message: 'Please select an option from the below choices.',
            choices: 
                [
                    'View all Departments',
                    'View all Roles',
                    'View all Employees',
                    'Add a Department',
                    'Add a role',
                    'Add an employee',
                    'Update an Employee Role'
                ]
        },
    ])
    .then(res => {
        switch(res) {
            case 'View all Departments' :
                console.log('View all Departments');
            break;
            case 'Exit' :
                break;
        }
    });