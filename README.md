# BAMAZON

###Storefront app using MySql and Node.js.

Shopping app allows user to search all products, choose, and purchase products.
User is first shown welcome message with prompt of YES/NO.
* If user chooses NO, exit message shown.
* If user chooses YES - 
    * User will be shown products and prompted to choose one by its ID number.
    * When product ID is entered, the user will be prompted to select the quantity desired.
        * If product is **NOT** available, user is notified "Out of Stock, Choose another item".
        * If product is **Available** - 
            * Success message delivered with total cost of item(s).
            * New product line is shown with updated quantity.
            * Shopping re-sets.

See attached images file for user flow - ![USER FLOW](/bamazonuserflow.pdf)

