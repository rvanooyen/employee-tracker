const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const db = require('./db/connection');

// Start DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

const promptUser = () => {
    return inquirer.prompt([
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
                    'Add a Role',
                    'Add an Employee',
                    'Update an Employee Role',
                    'Exit'
                ]
        },
    ])
    .then(res => {
        switch(res.option) {
            case 'View all Departments':
                viewAllDepartments();
            case 'View all Roles':
                viewAllRoles();
            case 'View all Employees':
                viewAllEmployees();
            case 'Add a Department':
                // inquirer.prompt([
                //     {
                //         name: 'department',
                //         type: 'input',
                //         message: 'Please enter the department you wish to add.',
                //         validate: departmentInput => {
                //             if (departmentInput) {
                //                 return true;
                //             } else {
                //                 console.log('Please enter the department you wish to enter.');
                //                 return false;
                //             }
                //         }
                //     }
                // ])
                console.log('Add a Department');
                return promptUser();
            case 'Add a Role':
                console.log('Add a Role');
                return promptUser();
            case 'Add an Employee':
                console.log('Add an Employee');
                return promptUser();
            case 'Update an Employee Role':
                console.log('Update an Employee Role');
                return promptUser();
            case 'Exit' :
                return;
        }
    });
};

const viewAllDepartments = () => {
    const sql = `SELECT departments.id AS id, departments.name AS department FROM departments`;
    db.query(sql, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    })
}

const viewAllRoles = () => {
    const sql = `SELECT roles.id AS id, roles.title AS title, roles.salary AS salary FROM roles`;
    db.query(sql, (error, response) => {
        if (error) throw error;
        console.table(response);
        promptUser();
    })
}

promptUser();
