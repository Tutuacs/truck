import { OnModuleInit } from '@nestjs/common';
import { AuthFunctions } from './auth/functions/auth.filter';
import { PrismaService } from './prisma/prisma.service';
export declare class AppModule implements OnModuleInit {
    private readonly auth;
    private readonly prisma;
    constructor(auth: AuthFunctions, prisma: PrismaService);
    onModuleInit(): Promise<void>;
}
