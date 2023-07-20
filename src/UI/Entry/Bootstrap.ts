import "reflect-metadata"
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { todoModule } from "../../App/DI/todoModule";
const server = new InversifyExpressServer(todoModule);

server.setConfig((app) => {
    app.use(express.json());
});

const app = server.build();
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

