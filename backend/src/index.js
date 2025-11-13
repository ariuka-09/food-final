import { configDotenv } from "dotenv";
import express from "express";
import { connectDB } from "./database/db.js";
import cors from "cors";
import {
  userRouter,
  foodCategoryRouter,
  foodRouter,
  foodOrderRouter,
} from "./routes/index.js";

configDotenv();
const port = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "*", // allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
connectDB();

app.use("/category", foodCategoryRouter);
app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/foodOrder", foodOrderRouter);

app.get("/", (_, res) => {
  res.status(200).json("server is running").end();
});

app.listen(port, () => {
  console.log("server is live", port);
});
// import { configDotenv } from "dotenv";
// import express from "express";
// import cors from "cors";
// import { connectDB } from "./database/db.js";
// import { foodCategoryRouter } from "./routes/foodCategory.js";
// import { userRouter } from "./routes/user.js";
// import { foodRouter } from "./routes/food.js";

// configDotenv();

// const app = express();
// const port = process.env.PORT || 5000;

// // ✅ Middleware (order matters!)
// app.use(cors({
//   origin: "http://localhost:3000", // more secure for dev
//   credentials: true,
// }));

// app.use(express.json()); // 👈 parses JSON request body
// app.use(express.urlencoded({ extended: true })); // optional for form data

// // ✅ Routes (after middleware)
// app.use("/foodCategory", foodCategoryRouter);
// app.use("/user", userRouter);
// app.use("/food", foodRouter);

// // ✅ Start server
// app.listen(port, () => {
//   console.log("✅ Server is live on port", port);
//   connectDB();
// });
