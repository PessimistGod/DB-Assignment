const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  desc: {
    type: String,
    trim: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  SKU: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true,
    min: 0
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product_Category'
  },
  inventoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product_Inventory'
  },
  discountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount'
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

productSchema.pre('save', async function (next) {
  try {
    this.updatedAt = Date.now();
    next();
  } catch (error) {
    next(error);
  }
});

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    trim: true
  },
  discountPercent: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  active: {
    type: Boolean,
    required: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

const inventorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

module.exports = {
  ProductCategory: mongoose.model('Product_Category', productCategorySchema),
  Product: mongoose.model('Product', productSchema),
  Discount: mongoose.model('Discount', discountSchema),
  ProductInventory: mongoose.model('Product_Inventory', inventorySchema)
};
