import { Controller, Get, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';
import { Acess, Role } from 'src/decorators';
import { AuthGuard, RoleGuard } from 'src/guards';

@UseGuards(AuthGuard, RoleGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // @Post()
  // create(@Body() createCartDto: CreateCartDto) {
  //   return this.cartService.create(createCartDto);
  // }

  @Acess(Role.Admin)
  @Get()
  findAll() {
    return this.cartService.findAll();
  }
  
  @Acess()
  @Get('profile/:id')
  findByProfile(@Param('id') id: string, @UserAuth() user: {id: string, role: Role}) {
    return this.cartService.findByProfile(id, user);
  }
  
  @Acess()
  @Get('user/:id')
  findByUser(@Param('id') id: string, @UserAuth() user: {id: string, role: Role, userId: string}) {
    return this.cartService.findByUser(id, user);
  }
  
  @Acess()
  @Get(':action/:type/:id')
  connectionsCart(@Param('id') id: string, @Param('type') type: string, @Param('action') action: string, @UserAuth() user: {cartId: string}) {
    return this.cartService.connectionsCart(type, action, id, user);
  }
  
  @Acess()
  @Get(':id')
  findOne(@Param('id') id: string, @UserAuth() user: {id: string, role: Role}) {
    return this.cartService.findOne(id, user);
  }
  
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCartDto) {
    return this.cartService.update(id, data);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cartService.remove(id);
  // }
}
