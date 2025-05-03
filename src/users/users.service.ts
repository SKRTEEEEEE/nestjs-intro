import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'johndee@theboss.com'},
        { id: 2, name: 'Jane Doe', email: 'janedoe@theboss.com'},
        { id: 3, name: 'Jack Doe', email: 'jackthedoe@theboss.com'}
    ]
    getUsers(){
        return this.users;
    }
}
