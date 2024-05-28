import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthAbstract } from './functions/auth-abstract';
export declare class AuthService {
    private readonly authFunctions;
    private readonly jwt;
    private issuer;
    private audience;
    constructor(authFunctions: AuthAbstract, jwt: JwtService);
    login(login: LoginDto): Promise<{
        token: string;
        profile: {
            id: string;
            userId: string;
            cartId: string;
            email: string;
            role: number;
        };
    }>;
    register(register: LoginDto): Promise<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }>;
    createToken(profile: {
        id: string;
        userId: string;
        cartId: string;
        email: string;
        role: number;
    }): Promise<{
        token: string;
        profile: {
            id: string;
            userId: string;
            cartId: string;
            email: string;
            role: number;
        };
    }>;
    checkToken(token: string): Promise<any>;
    validToken(token: string): boolean;
}
