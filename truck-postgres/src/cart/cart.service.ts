import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Role } from 'src/decorators';
import { CartAbstract } from './functions/cart-abstract';

@Injectable()
export class CartService {

  constructor(private readonly cartFunctions: CartAbstract) {}

  // create(createCartDto: CreateCartDto) {
  //   return 'This action adds a new cart';
  // }

  findAll() {
    return this.cartFunctions.listCart();
  }

  findByProfile(id: string, user: {id: string, role: Role }) {
    if (user.role !== Role.Admin && user.id !== id) {
      throw new UnauthorizedException("You don't have permission to access this resource")
    }
    return this.cartFunctions.findCartByProfile(id);
  }

  connectionsCart(type: string, action: string, id: string, user: {cartId: string }) {
    if(type.toLocaleLowerCase() === 'combo' ){
      if(action.toLocaleLowerCase() === 'add'){
        return this.cartFunctions.linkComboToCart(id, user.cartId);
      }else if(action.toLocaleLowerCase() === 'remove'){
        return this.cartFunctions.unlinkComboFromCart(id, user.cartId);
      }
    }else if (type.toLocaleLowerCase() === 'product'){
      if(action.toLocaleLowerCase() === 'add'){
        return this.cartFunctions.linkProductToCart(id, user.cartId);
      }else if(action.toLocaleLowerCase() === 'remove'){
        return this.cartFunctions.unlinkProductFromCart(id, user.cartId);
      }
    }
    return this.cartFunctions.findCartByProfile(id);
  }
  
  findByUser(id: string, user: {id: string, role: Role, userId: string }) {
    if (user.role !== Role.Admin && user.userId !== id) {
      throw new UnauthorizedException("You don't have permission to access this resource")
    }
    return this.cartFunctions.findCartByUser(id);
  }
  
  findOne(id: string, user: {id: string, role: Role }) {
    if (user.role !== Role.Admin && user.id !== id) {
      throw new UnauthorizedException("You don't have permission to access this resource")
    }
    return this.cartFunctions.findCart(id);
  }

  update(id: string, data: UpdateCartDto) {
    return this.cartFunctions.updateCart(id, data);
  }

  // remove(id: string) {
  //   return `This action removes a #${id} cart`;
  // }
}
