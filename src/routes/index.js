import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../documentation';
import vehicleRoutes from './Vehicle'
import authRoutes from './userRoutes';
import fileRoutes from './fileRoutes';
import paymentRouter from './paymentRoutes';
const app  = express.Router();
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerOptions),
  );
app.get("/",(req,res)=>{
    return res.send({
        message:"Welcome to Default smart parking endpoint",
        status:200
    }) 
})
app.use("/api/v1/vehicles",vehicleRoutes)
app.use(`/api/v1/auth`, authRoutes);
app.use(`/api/v1/files`, fileRoutes);
app.use(`/api/v1/payment`, paymentRouter);

app.all(`*`, (req, res) => {
    res.status(404).json({
      status: 404,
      message: "we don''t have this kind of router",
    });
  });
export default app;