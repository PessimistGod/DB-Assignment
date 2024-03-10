const mongoose = require('mongoose');
const { Product, ProductCategory, Discount, ProductInventory } = require('./models/schema.js');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productMgmt', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Now you can start using your models
    createSampleData();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Function to create sample data
async function createSampleData() {
  try {
    // Create a product category
    const category = await ProductCategory.create({
      name: 'Electronics',
      desc: 'Category for electronic products'
    });

    // Create a product
    const product = await Product.create({
      name: 'Laptop',
      desc: 'A high-performance laptop',
      SKU: '123456',
      price: mongoose.Types.Decimal128.fromString('1200.50'),
      categoryId: category._id // Assign the category ID
    });

    // Create a discount
    const discount = await Discount.create({
      name: '10% Off',
      desc: 'Special discount offer',
      discountPercent: 10,
      active: true
    });

    // Create a product inventory
    const inventory = await ProductInventory.create({
      quantity: 100
    });

    // Update the product with inventory and discount IDs
    product.inventoryId = inventory._id;
    product.discountId = discount._id;
    await product.save();

    console.log('Sample data created successfully');
  } catch (error) {
    console.error('Error creating sample data:', error);
  }
}
