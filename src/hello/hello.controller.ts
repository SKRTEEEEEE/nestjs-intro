import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidategreetPipe } from './pipes/validategreet/validategreet.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
    @Get("/")
    getHello(@Req() req: Request, @Res() res: Response) {

        res.status(200).json({
            message: "Hello World!",
            method: req.method,
            url: req.url
        })
    }

    @Get("/notfound")
    @HttpCode(404)
    notFoundPage(){
        return 'Not Found Page'
    }

    @Get("/error")
    @HttpCode(500)
    errorPage(){
        return 'Error Page'
    }

    @Get("/badrequest")
    @HttpCode(400)
    badRequestPage(){
        return 'Bad Request Page'
    }

    @Get("/new")
    @HttpCode(201)
    newPage(){
        return 'Something New Page'
    }

    @Get("/ticket/:num")
    //Usamos ParseIntPipe para utilizar el num como un numero
    getTicket(@Param('num', ParseIntPipe) num: number) {
        return 10+num
    }

    // @Get("/status/:status")
    // getTicketStatus(@Param('status') status: boolean) {
    //     return {typeof: typeof status, value: status}
    // }
    @Get("/status/:status")
    @UseGuards(AuthGuard)
    getTicketStatus(@Param('status', ParseBoolPipe) status: boolean) {
        return {typeof: typeof status, value: status}
    }

    @Get("/greet")
    @UseGuards(AuthGuard)
    greet(@Query(ValidategreetPipe) query: { name: string, age: number, student: boolean }) {
        return {
            message: `Hello ${query.name}, you are ${query.age} years old and you are ${query.student ? 'a student' : 'not a student'}`,
            typeofAge: typeof query.age,
            typeofStudent: typeof query.student,
            age: query.age,
            student: query.student
        }
    }
}
