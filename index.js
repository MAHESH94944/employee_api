import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import departmentRouter from "./routes/department.js";
import employeeRouter from "./routes/employee.js";
import dotenv from "dotenv";
import connectToDatabase from "./db/db.js";
import salaryRouter from "./routes/salary.js";
import leaveRouter from "./routes/leave.js";
import settingRouter from "./routes/setting.js";
import dashboardROuter from "./routes/dashboard.js";
import attendanceRouter from "./routes/attendance.js";
import multer from "multer"; // Add this import
import { put } from "@vercel/blob"; // Add this import

dotenv.config();

// Add this right after dotenv.config()
const upload = multer({ storage: multer.memoryStorage() }); // Store file in memory temporarily

connectToDatabase();
const app = express();

app.use(
  cors({
    origin: "https://employee-frontend-nu.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("public/uploads")); // You can keep this for now, but it won't be used for new uploads
app.use("/api/auth", authRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/salary", salaryRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/setting", settingRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/dashboard", dashboardROuter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});

// import express from "express";
// import cors from "cors";
// import authRouter from "./routes/auth.js";
// import departmentRouter from "./routes/department.js";
// import employeeRouter from "./routes/employee.js";
// import dotenv from "dotenv";
// import connectToDatabase from "./db/db.js";
// import salaryRouter from "./routes/salary.js";
// import leaveRouter from "./routes/leave.js";
// import settingRouter from "./routes/setting.js";
// import dashboardROuter from "./routes/dashboard.js";
// import attendanceRouter from "./routes/attendance.js";

// dotenv.config();

// connectToDatabase();
// const app = express();

// app.use(
//   cors({
//     origin: "https://employee-frontend-nu.vercel.app",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.static("public/uploads"));
// app.use("/api/auth", authRouter);
// app.use("/api/department", departmentRouter);
// app.use("/api/employee", employeeRouter);
// app.use("/api/salary", salaryRouter);
// app.use("/api/leave", leaveRouter);
// app.use("/api/setting", settingRouter);
// app.use("/api/attendance", attendanceRouter);
// app.use("/api/dashboard", dashboardROuter);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on PORT ${process.env.PORT}`);
// });
