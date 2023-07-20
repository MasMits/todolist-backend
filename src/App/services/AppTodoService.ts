import { injectable, inject } from "inversify";
import { TodoService } from "../../Domain/services/TodoService";

@injectable()
export class AppTodoService {
    constructor(@inject(TodoService) private readonly todoService: TodoService) {}

    public async getAllTodos(): Promise<any[]> {
        return this.todoService.getAllTodos();
    }

    public async createTodo(title: string, description: string): Promise<any> {
        return this.todoService.createTodo(title, description);
    }
}