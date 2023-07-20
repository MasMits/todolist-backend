import { injectable } from "inversify";
import { Todo } from "../../Domain/VO/Todo";
import { ITodoRepository } from "./ITodoRepository";

@injectable()
export class TodoRepository implements ITodoRepository {
    private todos: Todo[] = [];

    public async getAll(): Promise<Todo[]> {
        return this.todos;
    }

    public async getById(id: string): Promise<Todo | undefined> {
        return this.todos.find((todo) => todo.id === id);
    }

    public async create(todo: Todo): Promise<Todo> {
        this.todos.push(todo);
        return todo;
    }

    public async update(todo: Todo): Promise<Todo | undefined> {
        const index = this.todos.findIndex((t) => t.id === todo.id);
        if (index !== -1) {
            this.todos[index] = todo;
            return todo;
        }
        return undefined;
    }

    public async delete(id: string): Promise<void> {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}
