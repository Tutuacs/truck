import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ShowService } from './show.service';
import { AuthGuard } from 'src/guards';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@Controller('show')
export class ShowController {

    constructor(private readonly showService: ShowService) {}

    @Get('unlogged')
    unlogged() {
        return this.showService.unlogged();
    }

    @UseGuards(AuthGuard)
    @Get('logged/trucks')
    loggedWithTrucks(@UserAuth('userId') userId: string) {
        return this.showService.loggedWithTrucks(userId);
    }
    
    @UseGuards(AuthGuard)
    @Get('logged/shops')
    loggedWithShops(@UserAuth('userId') userId: string) {
        return this.showService.loggedWithShops(userId);
    }
    
    @UseGuards(AuthGuard)
    @Get('logged/trucks/shops')
    loggedWithTrucksAndShops(@UserAuth('userId') userId: string) {
        return this.showService.loggedWithTrucksAndShops();
    }

    @Get('products/:id')
    products(@Param('id') id: string) {
        return this.showService.products(id);
    }
}
