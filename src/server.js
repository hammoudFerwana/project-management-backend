import app from "./app.js";
import { PORT } from "./config/env.js";
import {connectDB} from "./config/DB.js";

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(() => {
    console.error("Failed to connect to the database. Server not started.");
});