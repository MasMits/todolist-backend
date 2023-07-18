import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./App/container";
// import "reflect-metadata";
import "reflect-metadata"
// Створюємо сервер Inversify Express
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());
});

const app = server.build();
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

// 1 - z  + 1 + z = 0
11