import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/decorators';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }[]>;
    findByProfile(id: string, user: {
        role: Role;
        id: string;
        userId: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }>;
    findOne(id: string, user: {
        role: Role;
        id: string;
        userId: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }>;
    update(id: string, data: UpdateUserDto, user: {
        role: Role;
        id: string;
        userId: string;
    }): Promise<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }>;
}
