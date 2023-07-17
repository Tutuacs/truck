import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowService {

    constructor(private readonly prisma: PrismaService) {}

    unlogged() {
        
    }

    loggedWithTrucks(userId: string) {
        return this.prisma.loggedTest(userId);
    }

    loggedWithShops() {
    }

    loggedWithTrucksAndShops() {
    }

    products(id: string) {
    }

}
