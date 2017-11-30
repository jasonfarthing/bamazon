var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "NbWeCtLoM",
    database: "bamazon",
});

connection.connect(function (err) {
    if (err) throw err;


});

inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: "Welcome to Bamazon, Ready to start shopping?",
        choices: ["YES", "NO"]

    }
]).then(function (answers) {
    console.log(answers);
    if (answers.choice == "YES") {
        inquirer.prompt([               //need to show available products here
            {
                type: 'input',
                name: 'items',
                message: "Input a title"
            },
            {
                type: 'input',
                name: 'category',
                message: "Input category"
            },
            {
                type: 'input',
                name: 'price',
                message: "Input price"
            }]).then(function (answer) {
                var items = answer.items;
                var category = answer.category;
                var price = answer.price;
                createProduct(items, category, price);
            
            });
    }

}).catch(function (err) {
    console.log(err)
});
//---------

function createProduct(items, category, price) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO items SET ?",
        {
            items: items,
            category: category,
            price: price
        },
        function (err, res) {
            
            
        }
    )
};