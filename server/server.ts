import app from "./src/app";
import { envConfig } from "./src/config/config";
import "./src/database/connection";
import  sequelize  from "../server/src/database/connection";



const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✔");

    await sequelize.sync();
    console.log("Models synced ✔");

     const port = envConfig.port || 4000;
  app.listen(port, () => {
    console.log(`server has started at port ${port}`);
  });
  } catch (err) {
    console.error("❌ Startup error:", err);
  }
};

startServer();
