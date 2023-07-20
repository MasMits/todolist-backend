import { Container } from "inversify";
import { TodoController } from "../../UI/controllers/TodoController";
import { TodoRepository } from "../../Infa/repositories/TodoRepository";
import { TodoService } from "../../Domain/services/TodoService";
import {ITodoRepository} from "../../Infa/repositories/ITodoRepository";
import {AppTodoService} from "../services/AppTodoService";

const todoModule = new Container();

todoModule.bind<TodoController>(TodoController).toSelf();
todoModule.bind<ITodoRepository>(TodoRepository).toSelf();
todoModule.bind<TodoService>(TodoService).toSelf();
todoModule.bind<AppTodoService>(AppTodoService).toSelf();

export { todoModule };
