import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get("/users")
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post("/users")
    createTask(){
        return "Creando Tareas"
    }

    @Put("/users") //Cambiar toda la tarea
    updateTask(){
        return "Actualizando Tareas"
    }

    @Delete("/users")
    deleteTask(){
        return "Eliminando Tareas"
    }

    @Patch("/users") //Actualiza solo una parte de la tarea
    patchTask(){
        return "Actualizando Tareas"
    }

}
