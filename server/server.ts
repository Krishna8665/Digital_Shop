import app from "./src/app";
import envConfig from "./src/config/config";

const startServer = async () => {
  
  const port = envConfig.portNumber || 3000;
  app.listen(port, () => {
    console.log(`server has started at port ${port}`);
  });
};

startServer();