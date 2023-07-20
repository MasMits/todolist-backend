import { inject } from "inversify";
import { Request, Response } from "express";
import { AppTodoService } from "../../App/services/AppTodoService";
import {
    controller, httpGet, BaseHttpController, httpPost, request, response
} from "inversify-express-utils";

@controller("/todo")
export class TodoController extends BaseHttpController {
    constructor(
        @inject(AppTodoService) private todoService: AppTodoService
    ) {
        super();
    }

    @httpGet('/tasks')
    public async getAllTodos(@request() req: Request, @response() res: Response): Promise<void> {
        try {
            const todos = await this.todoService.getAllTodos();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    @httpPost('/tasks')
    public async createTodo(req: Request, res: Response): Promise<void> {
        try {
            const { title, description } = req.body;
            const createdTodo = await this.todoService.createTodo(title, description);
            res.status(201).json(createdTodo);
        } catch (error) {
            res.status(500).json({ error: error});
        }
    }
}