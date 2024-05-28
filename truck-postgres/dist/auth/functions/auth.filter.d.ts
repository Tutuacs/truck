import { LoginDto } from '../dto/login.dto';
import { AuthAbstract } from './auth-abstract';
import { AuthVerify } from './auth-exist.filter';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
export declare class AuthFunctions extends AuthVerify implements AuthAbstract {
    register(data: CreateProfileDto): Promise<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }>;
    login(data: LoginDto): Promise<{
        id: string;
        userId: string;
        cartId: string;
        email: string;
        role: number;
    }>;
}
