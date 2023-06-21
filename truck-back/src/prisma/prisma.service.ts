import {
  BadRequestException,
  ConflictException,
  INestApplication,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBrandDto } from 'src/brands/Validation/create-brand.dto';
import { UpdateBrandDto } from 'src/brands/Validation/update-brand.dto';
import { CreateProductDto } from 'src/product/Validation/create-product.dto';
import { UpdateProductDto } from 'src/product/Validation/update-product.dto';
import { CreateProfileDto } from 'src/profile/Validation/create-profile.dto';
import { UpdateProfileDto } from 'src/profile/Validation/update-profile.dto';
import { CreatePromotionDto } from 'src/promotion/Validation/create-promotion.dto';
import { UpdatePromotionDto } from 'src/promotion/Validation/update-promotion.dto';
import { CreateTruckDto } from 'src/truck/Validation/create-truck.dto';
import { UpdateTruckDto } from 'src/truck/Validation/update-truck.dto';
import { CreateUserDto } from 'src/user/Validation/create-user.dto';
import { UpdateUserDto } from 'src/user/Validation/update-user.dto';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  //=============================================================================================//
  // #User

  async existUserId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException('O usuário com o id solicitado não existe');
    }
    if (
      !(await this.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O usuário com o id solicitado não existe');
    }
  }

  createUser(data: CreateUserDto) {
    return this.user.create({
      data,
    });
  }

  findAllUsers() {
    return this.user.findMany();
  }

  findUniqUser(id: string) {
    return this.user.findUnique({
      where: {
        id,
      },
    });
  }

  updateUser(id: string, data: UpdateUserDto) {
    return this.user.update({
      data,
      where: {
        id,
      },
    });
  }

  removeUser(id: string) {
    return this.user.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Profile

  async existProfileId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException('O perfil com o id solicitado não existe');
    }
    if (
      !(await this.profile.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O perfil com o id solicitado não existe');
    }
  }

  async existProfileEmail(id: string, email: string) {
    const user = await this.profile.findFirst({
      where: {
        email,
      },
    });
    if (user && user.id != id) {
      throw new ConflictException('O email inserido já possui cadastro.');
    }
  }

  createProfile(data: CreateProfileDto) {
    return this.profile.create({
      data,
    });
  }

  findAllProfiles() {
    return this.profile.findMany();
  }

  findUniqProfile(id: string) {
    return this.profile.findUnique({
      where: {
        id,
      },
    });
  }

  updateProfile(id: string, data: UpdateProfileDto) {
    return this.profile.update({
      data,
      where: {
        id,
      },
    });
  }

  removeProfile(id: string) {
    return this.profile.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Truck

  async existTruckId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException(
        'O caminhão com o id solicitado não existe',
      );
    }
    if (
      !(await this.truck.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(
        'O caminhão com o id solicitado não existe',
      );
    }
  }

  createTruck(data: CreateTruckDto) {
    return this.truck.create({
      data,
    });
  }

  findAllTrucks() {
    return this.truck.findMany({
      select: {
        id: true,
        brand: true,
        image: true,
        pound: true,
        userId: false,
      },
    });
  }

  findUniqTruck(id: string) {
    return this.truck.findUnique({
      where: {
        id,
      },
    });
  }

  updateTruck(id: string, data: UpdateTruckDto) {
    return this.truck.update({
      data,
      where: {
        id,
      },
    });
  }

  removeTruck(id: string) {
    return this.truck.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Brand

  async existBrandId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException('A marca com o id solicitado não existe');
    }
    if (
      !(await this.brands.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('A marca com o id solicitado não existe');
    }
  }

  createBrand(data: CreateBrandDto) {
    return this.brands.create({
      data,
    });
  }

  findAllBrands() {
    return this.brands.findMany();
  }

  findUniqBrand(id: string) {
    return this.brands.findUnique({
      where: {
        id,
      },
    });
  }

  updateBrand(id: string, data: UpdateBrandDto) {
    return this.brands.update({
      data,
      where: {
        id,
      },
    });
  }

  removeBrand(id: string) {
    return this.brands.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Product

  async existProductId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException('O produto com o id solicitado não existe');
    }
    if (
      !(await this.product.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O produto com o id solicitado não existe');
    }
  }

  createProduct(data: CreateProductDto) {
    return this.product.create({
      data,
    });
  }

  findAllProducts() {
    return this.product.findMany();
  }

  findUniqProduct(id: string) {
    return this.product.findUnique({
      where: {
        id,
      },
    });
  }

  updateProduct(id: string, data: UpdateProductDto) {
    return this.product.update({
      data,
      where: {
        id,
      },
    });
  }

  removeProduct(id: string) {
    return this.product.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Promotion

  async existPromotionId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException(
        'A promoção com o id solicitado não existe',
      );
    }
    if (
      !(await this.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(
        'A promoção com o id solicitado não existe',
      );
    }
  }

  createPromotion(data: CreatePromotionDto) {
    return this.promotion.create({
      data,
    });
  }

  findAllPromotions() {
    return this.promotion.findMany();
  }

  findUniqPromotion(id: string) {
    return this.promotion.findUnique({
      where: {},
    });
  }

  updatePromotion(id: string, data: UpdatePromotionDto) {
    return this.promotion.update({
      data,
      where: {
        id,
      },
    });
  }

  removePromotion(id: string) {
    return this.promotion.delete({
      where: {
        id,
      },
    });
  }
}
