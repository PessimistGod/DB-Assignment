## Question and Answer


#### **1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.**


The Relation between *Product* and *Product_Category* here is
**Many-to-One**

**Many**: A single Category can have many Products associated with it.\
**One**: A single Product can only belong to one Category.

#### **2. How could you ensure that each product in the "Product" table has a valid category assigned to it?**

* **User Interface Controls**: implement a dropdown menu or selection list that only displays valid categories from the *Category* table. This approach helps prevent users from entering invalid category IDs directly.
* **Foreign Key Constraint**: Enforcing data integrity within the database itself.
* **Application Logic**: Adding proper checks on category data which is being used.
* **Default Category**: This is a valid option to avoid null values, but it's important to acknowledge it doesn't guarantee a truly valid assignment.

#### **3. Create schema in any Database script or any ORM (Object Relational Mapping).**
* The *schema.js* has been attached and the schema is typed in mongoose for MongoDB Database


##### To Test an Run schema
* Run `npm install` inside Test Folder
* Run `node index.js` will create DB with sample data