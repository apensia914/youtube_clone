import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})