import { Todo } from "../../Domain/VO/Todo";

export interface ITodoRepository {
    getAll(): Promise<Todo[]>;
    getById(id: string): Promise<Todo | undefined>;
    create(todo: Todo): Promise<Todo>;
    update(todo: Todo): Promise<Todo | undefined>;
    delete(id: string): Promise<void>;
}
