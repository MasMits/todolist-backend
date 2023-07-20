export class Todo {
    id: string = '';
    title: string = '';
    description: string = '';
    createdAt: Date;
    updatedAt: Date;

    constructor(
        createdAt: Date = new Date(),
        updatedAt: Date = new Date()
    ) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
