import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './task.dto';

@Controller("/tasks")
export class TaskController {
    constructor(protected taskService:TaskService) {}
    
    @Get()
    getAllTasks(){
        // console.log(query)
        return this.taskService.getTasks();
    }

    @Get("/:id")
    getTask(@Param("id") id: string){
        return this.taskService.getTask(parseInt(id));
    }

    @Post()
    // @UsePipes(new ValidationPipe()) // Si vamos a validar siempre, podemos importar esto en la ruta main.ts - cuando utilizamos el ValidationPipe de esta forma, si le pasamos mas valores de los esperados, NO nos va a dar un error, sino que simplemente no los va a tomar en cuenta y los va a aceptar como validos.
    createTask(@Body() task: CreateTaskDto){
        console.log(task)
        return this.taskService.createTask(task)
    }

    @Put() //Cambiar toda la tarea
    updateTask4(){
        return this.taskService.updateTask(4, {
            title: "Task 4 edited",
            description: "Description for task 1",
            status: true
        });
    }

    @Delete()
    deleteTask4(){
        return this.taskService.deleteTask(4);
    }

    @Patch() //Actualiza solo una parte de la tarea
    patchTask4(){
        return this.taskService.patchTask(4, {
            status: false
        });
    }

}