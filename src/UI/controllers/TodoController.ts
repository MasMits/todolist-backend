import { injectable, inject } from "inversify";
import { Request, Response } from "express";
import { TodoService } from "../../Domain/services/TodoService";

@injectable()
export class TodoController {
    constructor(@inject(TodoService) private todoService: TodoService) {}

    public async getAllTodos(req: Request, res: Response): Promise<void> {
        try {
            const todos = await this.todoService.getAllTodos();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    public async createTodo(req: Request, res: Response): Promise<void> {
        try {
            const { title, description } = req.body;
            const createdTodo = await this.todoService.createTodo(title, description);
            res.status(201).json(createdTodo);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }

    // Додайте інші методи контролера тут
}
