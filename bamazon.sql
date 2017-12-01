DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    id INT AUTO_INCREMENT,
    product_name VARCHAR (30),
    department_name VARCHAR (30),
    price DECIMAL (10, 2),
    stock_quantity INT (4),
    PRIMARY KEY (id)
);

SELECT * FROM products;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('COFFEE TABLE', 'FURNISHINGS', 299.55, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('BLENDER', 'KITCHEN', 69.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('BICYCLE', 'SPORTING GOODS', 199.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('COWBOY BOOTS', 'SHOES', 89.25, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('GUITAR', 'MUSICAL INSTRUMENTS', 239.35, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('TRUMPET', 'MUSICAL INSTRUMENTS', 579.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('LEATHER COUCH', 'FURNISHINGS', 1035.89, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('FRYING PAN', 'KITCHEN', 8.75, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('FOOTBALL HELMET', 'SPORTING GOODS', 38.95, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('TEA KETTLE', 'KITCHEN', 4.95, 34);








