import {Injectable, NotFoundException}from '@nestjs/common';
import { CreateTaskDto } from './task.dto';

export type Task = {
    title: string;
    description: string;
    status: boolean;
}

@Injectable()
export class TaskService{
    private tasks = [
        {
            id: 1,
            title: "Task 1",
            description: "Description for task 1",
            status: true
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description for task 2",
            status: true
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description for task 3",
            status: false
        }
    ]
    getTasks(){
        return this.tasks;
    }
    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) return new NotFoundException(`Task with id ${id} not found`);
        return taskFound;
    }

    
    createTask(task: CreateTaskDto) {
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task,
            status: false
        });
        return this.tasks;
    }
    updateTask(id: number, task: Task) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks[index] = { id, ...task };
        }
        return this.tasks;
    }
    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks;
    }
    patchTask(id: number, task: Partial<Task>) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...task };
        }
        return this.tasks;
    }


}