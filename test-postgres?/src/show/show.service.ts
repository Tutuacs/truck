import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowService {

    constructor(private readonly prisma: PrismaService) {}

    unlogged() {
        
    }

    loggedWithTrucks(userId: string) {
        return this.prisma.loggedWithTrucks(userId);
    }

    loggedWithShops(userId: string) {
        return this.prisma.loggedWithShops(userId);
    }

    loggedWithTrucksAndShops() {
    }

    products(id: string) {
    }

}
