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
console.log("\n")
inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: "Welcome to Bamazon, Ready to start shopping?",
        choices: ["YES", "NO"]
    }
]).then(function (answers) {

    if (answers.choice == "YES") {

        queryAllProducts();//need to show available products here

    } else {
        console.log("------------------------------------")
        console.log("Maybe next time, Thanks for Visiting!")
        console.log("------------------------------------")
        connection.end();
    }

}).catch(function (err) {
    console.log(err)
});

//--------- update product

function updateProduct(itemId, qnty) {
    console.log("==============================================");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: qnty
            },

            {
                id: itemId
            }
        ],
        function (err, res) {

        }
    );

    //console.log(query.sql);
}

//----------
//my function to show all the products to the customer
function queryAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("-----------------------------");            
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            console.log("-----------------------------");
        }

        inquirer.prompt([
            {
                type: 'input',
                name: 'items',
                message: "Please enter the product ID to continue."
            }]).then(function (answer) {
                yourProduct(answer.items);
            });
    });
};

function yourProduct(product) {
    connection.query("SELECT * FROM products WHERE id=?", product, function (err, res) {
        var itemId = res[0].id;
        var oldQnty = res[0].stock_quantity;
        var itemPrice = res[0].price;
        if (oldQnty < 1) {
            console.log("------------------------------------");
            console.log("Out of Stock, Choose another product!");
            console.log("------------------------------------");
            inquirer.prompt([
                {      //testing
                    type: 'input',
                    name: 'items',
                    message: "Please enter the product ID to continue."
                }]);
            
        } else {
            console.log("-----------------------------------");
            console.log(res[0].id + " | " + res[0].product_name + " | " + res[0].department_name + " | " + res[0].price + " | " + res[0].stock_quantity);
            console.log("-----------------------------------");
        }
        // connection.end();
        inquirer.prompt([
            {
                type: 'input',
                name: 'items',
                message: "Please enter the quantity to purchase."
            }]).then(function (answer) {
                // if (oldQnty < 1 ){
                //     console.log("------------------------------------")
                //     console.log("Out of Stock, Thanks for Visiting!")
                //     console.log("------------------------------------")
                //     connection.end();
                // }else{
                var newQnty = oldQnty - answer.items;
                console.log("==============================================");
                console.log("Congrats! You bought it, Your cost is $" + itemPrice * answer.items);
                updateProduct(itemId, newQnty);
                console.log(res[0].id + " | " + res[0].product_name + " | " + " New Qnty = " + newQnty);
                
                //update item qnty based on how many user bought
                //display item line with new info qnty
                connection.end();
            }
            
    )});

};
