import { Profile } from '@prisma/client';
import { LoginDto } from '../dto/login.dto';
export declare abstract class AuthAbstract {
    abstract register(data: LoginDto): Promise<Profile>;
    abstract login(data: LoginDto): Promise<{
        id: string;
        userId: string;
        cartId: string;
        email: string;
        role: number;
    }>;
    abstract findProfile(id: string): Promise<Profile>;
}
