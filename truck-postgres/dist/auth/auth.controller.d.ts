import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
}
