import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import User from "./models/userModel";

const sequelize = new Sequelize(envConfig.connectionString!, {
  dialect: "postgres",
  models: [User],
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for Supabase Pooler
    },
  },
  logging: false, // Disable SQL logs, optional
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Supabase! 😀");
    await sequelize.sync({ force: false, alter: false });
    console.log("Database synced!");
  } catch (err) {
    console.error("ERROR 😝 :", err);
  }
})();

export default sequelize;
// relationships //
// Category.hasOne(Product,{foreignKey:'categoryId'})
// Product.belongsTo(Category,{foreignKey:'categoryId'})

// // User X Order
// User.hasMany(Order,{foreignKey:'userId'})
// Order.belongsTo(User,{foreignKey:'userId'})

// // Payment X Order
// Payment.hasOne(Order,{foreignKey:'paymentId'})
// Order.belongsTo(Payment,{foreignKey:'paymentId'})

// Order.hasOne(OrderDetails,{foreignKey:'orderId'})
// OrderDetails.belongsTo(Order,{foreignKey:'orderId'})

// Product.hasMany(OrderDetails,{foreignKey:'productId'})
// OrderDetails.belongsTo(Product,{foreignKey:'productId'})

// // cart - user
// Cart.belongsTo(User,{foreignKey:"userId"})
// User.hasOne(Cart,{foreignKey:"userId"})

// // cart - product
// Cart.belongsTo(Product,{foreignKey:"productId"})
// Product.hasMany(Cart,{foreignKey:"productId"})
