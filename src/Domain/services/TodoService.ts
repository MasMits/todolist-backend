import { injectable, inject } from "inversify";
import { Todo } from "../models/Todo";
import { TodoRepository } from "../../Infa/repositories/TodoRepository";

@injectable()
export class TodoService {
    constructor(@inject(TodoRepository) private todoRepository: TodoRepository) {}

    public async getAllTodos(): Promise<Todo[]> {
        return this.todoRepository.getAll();
    }

    public async getTodoById(id: string): Promise<Todo | undefined> {
        return this.todoRepository.getById(id);
    }

    public async createTodo(
        title: string,
        description: string
    ): Promise<Todo> {
        const todo = new Todo();
        todo.id = '1';
        todo.title = title;
        todo.description = description;

        return this.todoRepository.create(todo);
    }

    public async updateTodo(
        id: string,
        updatedTodo: Partial<Todo>
    ): Promise<Todo | undefined> {
        const existingTodo = await this.todoRepository.getById(id);
        if (existingTodo) {
            const mergedTodo = { ...existingTodo, ...updatedTodo };
            return this.todoRepository.update(mergedTodo);
        }
        return undefined;
    }

    public async deleteTodo(id: string): Promise<void> {
        await this.todoRepository.delete(id);
    }
}
