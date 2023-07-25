import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { UpdateCartDto } from './Validation/update-cart.dto';
import { AuthGuard } from 'src/guards';
import { UserAuth } from 'src/decorators/UserAtuh.decorator';

@UseGuards(AuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Put(':connect/:option/:id')
  addProduct_removeProduct(@Param() param:{connect: string, option: string, id:string}, @UserAuth('userId') userId: string){
    return this.cartService.connectProduct(param,userId)
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }
  
}
