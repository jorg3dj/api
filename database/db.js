import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI)
    console.log('Db conectada 😎😎')
} catch (error) {
    console.log('error de conexion')
} 