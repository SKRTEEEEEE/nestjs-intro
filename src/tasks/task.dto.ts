import { IsString, MinLength } from "class-validator";
import { Task } from "./task.service";

export class CreateTaskDto implements Omit<Task, "status"> {
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(8, {message: "Description is too short, minimum length is 8 characters"})
    description: string;

}
export type UpdateTaskDto = Partial<CreateTaskDto>;
