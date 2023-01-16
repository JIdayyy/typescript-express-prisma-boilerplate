import Express from "express";
import dotenv from "dotenv";
import prisma from "../prisma/client";
import cors from "cors";

dotenv.config();

const app = Express();

// Basics middlewares
app.use(Express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();

  res.status(200).json(todos);
});

export default app;
