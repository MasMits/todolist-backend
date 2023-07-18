import { Container } from "inversify";
import { TodoController } from "../UI/controllers/TodoController";
import { TodoRepository } from "../Infa/repositories/TodoRepository";
import { TodoService } from "../Domain/services/TodoService";

const container = new Container();

container.bind<TodoController>(TodoController).toSelf();
container.bind<TodoRepository>(TodoRepository).toSelf();
container.bind<TodoService>(TodoService).toSelf();

export { container };
