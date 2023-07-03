import {
  BadRequestException,
  ConflictException,
  HttpCode,
  INestApplication,
  Injectable,
  NotFoundException,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoginDto } from 'src/auth/Validation/login.dto';
import { CreateBrandDto } from 'src/brands/Validation/create-brand.dto';
import { UpdateBrandDto } from 'src/brands/Validation/update-brand.dto';
import { CreateCapacityDto } from 'src/capacity/Validation/create-capacity.dto';
import { UpdateCapacityDto } from 'src/capacity/Validation/update-capacity.dto';
import { CreateModelDto } from 'src/model/Validation/create-model.dto';
import { UpdateModelDto } from 'src/model/Validation/update-model.dto';
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
import { ConnectUsertruckDto } from 'src/usertruck/Validation/connect-usertruck.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUsertruckDto } from 'src/usertruck/Validation/update-usertruck.dto';
import { CreatetUsertruckDto } from 'src/usertruck/Validation/create-usertruck.dto';
import { CreatePromotionitemDto } from 'src/promotionitem/Validation/create-promotionitem.dto';
import { UpdatePromotionitemDto } from 'src/promotionitem/Validation/update-promotionitem.dto';

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

  async findLogin(login: LoginDto) {
    const user = await this.profile.findUnique({
      where: {
        email: login.email,
      },
    });
    if (user) {
      if (!(await bcrypt.compare(login.password, user.password))) {
        throw new UnauthorizedException('Usuário ou senha incorretos');
      }
    } else {
      throw new UnauthorizedException('Usuário ou senha incorretos');
    }
    return {
      id: user.id,
      email: user.email,
      userId: user.userId,
      role: user.role,
    };
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

  async createProfile(data: CreateProfileDto) {
    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);
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

  async removeProfile(id: string) {
    const user = await this.profile.delete({
      where: {
        id,
      },
      select: {
        User: {
          select: {
            id: true,
          },
        },
      },
    });

    return this.removeUser(user.User.id);
  }

  //=============================================================================================//
  // #UserTruck

  async existUserTruckId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException(
        'O caminhão com o id solicitado não existe',
      );
    }
    if (
      !(await this.userTruck.count({
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

  createUserTruck(data: CreatetUsertruckDto) {
    return this.userTruck.create({
      data,
    });
  }

  async connectUserTruck(id: string, data: ConnectUsertruckDto) {
    const where = {
      truckId: data.truckId ? data.truckId : undefined,
      modelId: data.modelId ? data.modelId : undefined,
      capacityId: data.capacityId ? data.capacityId : undefined,
    };

    const userTruck = await this.userTruck.findFirst({
      where: {
        truckId:{
          equals: where.truckId,
        },
        modelId:{
          equals: where.modelId,
        },
        capacityId:{
          equals: where.capacityId,
        }
      },
      select: {
        id: true,
      },
    });

    if (!userTruck) {
      const idd = await this.userTruck.create({
        data: {
          truckId: data.truckId,
          modelId: where.modelId,
          capacityId: where.capacityId,
        },
        select: {
          id: true,
        },
      });

      return this.user.update({
        data: {
          userTrucks: {
            connect: { id: idd.id },
          },
        },
        where: {
          id,
        },
      });
    }

    return this.user.update({
      data: {
        userTrucks: {
          connect: { id: userTruck.id },
        },
      },
      where: {
        id,
      },
    });
  }

  async disconnectUserTruck(id: string, data: ConnectUsertruckDto) {
    const where = {
      truckId: data.truckId ? data.truckId : undefined,
      modelId: data.modelId ? data.modelId : undefined,
      capacityId: data.capacityId ? data.capacityId : undefined,
    };

    const userTruck = await this.userTruck.findFirst({
      where: {
        truckId:{
          equals: where.truckId,
        },
        modelId:{
          equals: where.modelId,
        },
        capacityId:{
          equals: where.capacityId,
        }
      },
      select: {
        id: true,
      },
    });

    if (!userTruck) {
      throw new NotFoundException('O caminhão não foi encontrado');
    }

    return this.user.update({
      data: {
        userTrucks: {
          disconnect: { id: userTruck.id },
        },
      },
      where: {
        id,
      },
    });
  }

  findAllUserTrucks() {
    return this.userTruck.findMany({
      select: {
        id: true,
      },
    });
  }

  findUniqUserTruck(id: string) {
    return this.userTruck.findUnique({
      where: {
        id,
      },
    });
  }

  updateUserTruck(id: string, data: UpdateUsertruckDto) {
    return this.userTruck.update({
      data,
      where: {
        id,
      },
    });
  }

  removeUserTruck(id: string) {
    return this.capacity.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Capacity

  async existCapacityId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException(
        'A capacidade com o id solicitado não existe',
      );
    }
    if (
      !(await this.capacity.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException(
        'a capacidade com o id solicitado não existe',
      );
    }
  }

  createCapacity(data: CreateCapacityDto) {
    return this.capacity.create({
      data,
    });
  }

  findAllCapacitys() {
    return this.capacity.findMany({
      select: {
        id: true,
        capacity: true,
        engine: true,
        modelId: false,
      },
    });
  }

  findUniqCapacity(id: string) {
    return this.model.findUnique({
      where: {
        id,
      },
    });
  }

  updateCapacity(id: string, data: UpdateCapacityDto) {
    return this.capacity.update({
      data,
      where: {
        id,
      },
    });
  }

  removeCapacity(id: string) {
    return this.capacity.delete({
      where: {
        id,
      },
    });
  }

  //=============================================================================================//
  // #Model

  async existModelId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException('O modelo com o id solicitado não existe');
    }
    if (
      !(await this.model.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O modelo com o id solicitado não existe');
    }
  }

  createModel(data: CreateModelDto) {
    return this.model.create({
      data,
    });
  }

  connectCapacity(id: string, idd: string) {
    HttpCode(202);
    return this.model.update({
      data: {
        Capacity: {
          connect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }

  disconnectCapacity(id: string, idd: string) {
    HttpCode(301);
    return this.model.update({
      data: {
        Capacity: {
          disconnect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }

  findAllModels() {
    return this.model.findMany({
      select: {
        id: true,
        image: true,
        year: true,
        Capacity: {
          select: {
            id: true,
            capacity: true,
            engine: true,
            modelId: false,
            Model: false,
          },
        },
        capacityId: false,
      },
    });
  }

  findUniqModel(id: string) {
    return this.model.findUnique({
      where: {
        id,
      },
    });
  }

  updateModel(id: string, data: UpdateModelDto) {
    return this.model.update({
      data,
      where: {
        id,
      },
    });
  }

  removeModel(id: string) {
    return this.model.delete({
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

  connectModel(id: string, idd: string) {
    return this.truck.update({
      data: {
        Model: {
          connect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }

  disconnectModel(id: string, idd: string) {
    return this.truck.update({
      data: {
        Model: {
          disconnect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }

  findAllTrucks() {
    return this.truck.findMany({
      select: {
        id: true,
        brand: true,
        image: true,
        pound: true,
        Model: {
          select: {
            id: true,
            image: true,
            Capacity: {
              select: {
                id: true,
                capacity: true,
                engine: true,
              },
            },
          },
        },
      },
    });
  }

  findUniqTruck(id: string) {
    return this.truck.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        brand: true,
        image: true,
        Model: {
          select: {
            id: true,
            year: true,
            image: true,
            Capacity: true,
          },
        },
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
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
      },
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

  connectTP(idd: string, id: string) {
    return this.product.update({
      data: {
        UserTruck: {
          connect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }


    //=============================================================================================//
  // #Promotion Item

  async existPromotionItemId(id: string) {
    if (id.length < 24 || id.length > 24) {
      throw new BadRequestException('O produto com o id solicitado não existe');
    }
    if (
      !(await this.promotion_Item.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O produto com o id solicitado não existe');
    }
  }

  createPromotionItem(data: CreatePromotionitemDto) {
    return this.promotion_Item.create({
      data,
    });
  }

  findAllPromotionItems() {
    return this.promotion_Item.findMany();
  }

  findUniqPromotionItem(id: string) {
    return this.promotion_Item.findUnique({
      where: {
        id,
      },
    });
  }

  updatePromotionItem(id: string, data: UpdatePromotionitemDto) {
    return this.promotion_Item.update({
      data,
      where: {
        id,
      },
    });
  }

  removePromotionItem(id: string) {
    return this.promotion_Item.delete({
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
