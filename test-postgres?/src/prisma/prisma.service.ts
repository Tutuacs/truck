import {
  BadGatewayException,
  BadRequestException,
  ConflictException,
  INestApplication,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LoginDto } from 'src/auth/Validation/login.dto';
import { CreateBrandDto } from 'src/brands/Validation/create-brand.dto';
import { UpdateBrandDto } from 'src/brands/Validation/update-brand.dto';
import { CreateProductDto } from 'src/product/Validation/create-product.dto';
import { UpdateProductDto } from 'src/product/Validation/update-product.dto';
import { CreateTruckDto } from 'src/truck/Validation/create-truck.dto';
import { UpdateTruckDto } from 'src/truck/Validation/update-truck.dto';
import { CreateProfileDto } from 'src/profile/Validation/create-profile.dto';
import { UpdateProfileDto } from 'src/profile/Validation/update-profile.dto';
import { CreateUserDto } from 'src/user/Validation/create-user.dto';
import { UpdateUserDto } from 'src/user/Validation/update-user.dto';
import { CreateComboDto } from 'src/combo/Validation/create-combo.dto';
import { UpdateComboDto } from 'src/combo/Validation/update-combo.dto';
import { CreateCartDto } from 'src/cart/Validation/create-cart.dto';
import { UpdateCartDto } from 'src/cart/Validation/update-cart.dto';
import { CreateItemDto } from 'src/item/Validation/create-item.dto';
import { UpdateItemDto } from 'src/item/Validation/update-item.dto';
import * as bcrypt from 'bcrypt';

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
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException('O usuário com o id solicitado não existe');
    // }
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

  async register(data: CreateProfileDto) {
    await this.existProfileEmail('1', data.email);
    const user = await this.createUser(new CreateUserDto());
    const cartDto = new CreateCartDto();
    cartDto.userId = user.id;
    const cart = await this.createCart(cartDto);
    data.userId = user.id;
    return this.createProfile(data);
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

  connectUtoP(userId: string, profileId: string) {
    return this.user.update({
      where: {
        id: userId,
      },
      data: {
        profile: {
          connect: { id: profileId },
        },
      },
    });
  }

  connectUtoT(userId: string, id: string) {
    return this.user.update({
      where: {
        id: userId,
      },
      data: {
        Trucks: {
          connect: { id: id },
        },
      },
    });
  }

  disconnectUtoT(userId: string, id: string) {
    return this.user.update({
      where: {
        id: userId,
      },
      data: {
        Trucks: {
          disconnect: { id: id },
        },
      },
    });
  }

  //=============================================================================================//
  // #Profile

  async existProfileId(id: string) {
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException('O perfil com o id solicitado não existe');
    // }
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
      select: {
        id: true,
        userId: true,
        role: true,
        email: true,
        password: true,
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
    if (id != '1') {
      if (user && user.id != id) {
        throw new ConflictException('O email inserido já possui cadastro.');
      }
    } else {
      if (user) {
        throw new ConflictException('O email inserido já possui cadastro.');
      }
    }
  }

  async createProfile(data: CreateProfileDto) {
    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);
    return this.profile.create({
      data,
      select: {
        id: true,
        email: true,
        image: true,
        role: true,
        password: false,
      },
    });
  }

  findAllProfiles() {
    return this.profile.findMany({
      select: {
        id: true,
        email: true,
        image: true,
        role: true,
        password: false,
      },
    });
  }

  findUniqProfile(id: string) {
    return this.profile.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        image: true,
        role: true,
        password: false,
      },
    });
  }

  updateProfile(id: string, data: UpdateProfileDto) {
    return this.profile.update({
      data,
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        image: true,
        role: true,
        password: false,
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

    await this.removeUser(user.User.id);
    await this.removeCart(user.User.id);
  }

  //=============================================================================================//
  // #Truck

  async existTruckId(id: string) {
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException(
    // 'O caminhão com o id solicitado não existe',
    // );
    // }
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
        year: true,
        pound: true,
        modelImage: true,
        capacity: true,
        engine: true,
      },
    });
  }

  findAllTrucksB(brand: string) {
    return this.truck.findMany({
      where: {
        brand: {
          equals: brand,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        brand: true,
        image: true,
        year: true,
        pound: true,
        modelImage: true,
        capacity: true,
        engine: true,
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
        year: true,
        pound: true,
        modelImage: true,
        capacity: true,
        engine: true,
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

  //   //=============================================================================================//
  //   // #Brand

  async existBrandId(id: string) {
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException('A marca com o id solicitado não existe');
    // }
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

  //   //=============================================================================================//
  //   // #Product

  async existProductId(id: string) {
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException('O produto com o id solicitado não existe');
    // }
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
    return this.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        brandsId: true,
        price: true,
        promotion: true,
        Truck: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        promotion: 'desc',
      },
    });
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
        Truck: {
          connect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }

  disconnectTP(idd: string, id: string) {
    return this.product.update({
      data: {
        Truck: {
          disconnect: { id: idd },
        },
      },
      where: {
        id,
      },
    });
  }

  //   //=============================================================================================//
  //   // #Combo

  async existComboId(id: string) {
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException('O combo com o id solicitado não existe');
    // }
    if (
      !(await this.combo.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O combo com o id solicitado não existe');
    }
  }

  createCombo(data: CreateComboDto) {
    return this.combo.create({
      data,
    });
  }

  findAllCombos() {
    return this.combo.findMany();
  }

  findUniqCombo(id: string) {
    return this.combo.findUnique({
      where: {
        id,
      },
    });
  }

  updateCombo(id: string, data: UpdateComboDto) {
    return this.combo.update({
      data,
      where: {
        id,
      },
    });
  }

  removeCombo(id: string) {
    return this.combo.delete({
      where: {
        id,
      },
    });
  }

  //   //=============================================================================================//
  //   // #Combo

  async existItemId(id: string) {
    // if (id.length < 24 || id.length > 24) {
    // throw new BadRequestException('O item com o id solicitado não existe');
    // }
    if (
      !(await this.item.count({
        where: {
          id,
        },
      }))
    ) {
      throw new BadRequestException('O item com o id solicitado não existe');
    }
  }

  createItem(data: CreateItemDto) {
    return this.item.create({
      data,
    });
  }

  findAllItems() {
    return this.item.findMany();
  }

  findUniqItem(id: string) {
    return this.item.findUnique({
      where: {
        id,
      },
    });
  }

  updateItem(id: string, data: UpdateItemDto) {
    return this.item.update({
      data,
      where: {
        id,
      },
    });
  }

  removeItem(id: string) {
    return this.item.delete({
      where: {
        id,
      },
    });
  }

  //   //=============================================================================================//
  //   // #Cart

  async existCartId(id: string, userId: string) {
    if (
      id.length < 24 ||
      id.length > 24 ||
      userId.length < 24 ||
      userId.length > 24
    ) {
      throw new BadRequestException(
        'Problema com o id solicitado, não existe?',
      );
    }
    if (
      !(await this.user.count({
        where: {
          id: userId,
          Cart: {
            id: id,
          },
        },
      }))
    ) {
      throw new BadRequestException('O Carrinho solicitado não existe');
    }
  }

  async existGoCartId(userId: string, id: string) {
    const product = await this.product.count({
      where: {
        id,
      },
    });
    if (product) {
      return this.cart.update({
        data: {
          Product: {
            connect: { id },
          },
        },
        where: {
          userId,
        },
      });
    } else {
      const combo = await this.combo.count({
        where: {
          id,
        },
      });

      if (combo) {
        return this.cart.update({
          data: {
            Combo: {
              connect: {
                id,
              },
            },
          },
          where: {
            userId,
          },
        });
      } else {
        throw new BadGatewayException(
          'Ops, parece que ocorreu um erro ao tentar adicionar o produto ao carrinho, atualize a página ou tente novamente mais tarde',
        );
      }
    }
  }

  async existExitCartId(userId: string, id: string) {
    const product = await this.product.count({
      where: {
        id,
      },
    });
    if (product) {
      return this.cart.update({
        data: {
          Product: {
            disconnect: {
              id,
            },
          },
        },
        where: {
          userId,
        },
      });
    } else {
      const combo = await this.combo.count({
        where: {
          id,
        },
      });

      if (combo) {
        return this.cart.update({
          data: {
            Combo: {
              disconnect: {
                id,
              },
            },
          },
          where: {
            userId,
          },
        });
      } else {
        throw new BadGatewayException(
          'Ops, parece que ocorreu um erro ao tentar adicionar o produto ao carrinho, atualize a página ou tente novamente mais tarde',
        );
      }
    }
  }

  createCart(data: CreateCartDto) {
    return this.cart.create({
      data,
    });
  }

  findAllCarts() {
    return this.cart.findMany();
  }

  findUniqCart(id: string) {
    return this.cart.findUnique({
      where: {
        id,
      },
    });
  }

  updateCart(id: string, data: UpdateCartDto) {
    return this.cart.update({
      data,
      where: {
        id,
      },
    });
  }

  removeCart(id: string) {
    return this.cart.delete({
      where: {
        id,
      },
    });
  }

  //   //=============================================================================================//
  //   // #Show

  async unlogged(skip: number, take: number) {
    return this.product.findMany({
      skip,
      take,
      orderBy: {
        promotion: 'desc',
      },
    });
  }

  async loggedWithTrucks(userId: string) {
    const result = await this.$queryRaw`
    SELECT id, "productId", name, promotion, price, "commonTrucksCount"
    FROM (
      SELECT *,
        (
          SELECT COUNT(*)
          FROM "_TruckToUser"
          WHERE "_TruckToUser"."A" = "Product_Truck"."truckId"
          AND "_TruckToUser"."B" = ${userId}
        ) as "commonTrucksCount"
      FROM "Product"
      LEFT JOIN (
        SELECT "A" as "productId", "B" as "truckId"
        FROM "_ProductToTruck"
      ) as "Product_Truck" ON "Product"."id" = "Product_Truck"."productId"
    ) as "temp"
    GROUP BY "id", "productId", "name", "promotion", "price", "commonTrucksCount"
    ORDER BY promotion DESC, "commonTrucksCount" DESC, price DESC, name
    LIMIT 10 OFFSET 0;
      `;

    // Aqui, utilizamos a assertiva de tipo "as" para definir o tipo de "result" como Array<any>
    const products = result as Array<any>;

    // Removendo o campo "commonTrucksCount" do objeto antes de retornar a resposta
    const formattedProducts = products.map(
      ({ commonTrucksCount, ...product }) => product,
    );

    return formattedProducts;
  }

  async loggedWithShops(userId: string) {
    const result = await this.$queryRaw` 
      SELECT productId, name, promotion, quantity,
        SUM(quantity) OVER (PARTITION BY productId ORDER BY promotion DESC, quantity DESC) AS totalSales
      FROM 
        Order
        JOIN Item ON Order.id = Item.orderId
      WHERE
        userId = ${userId}
      GROUP BY
        productId,
        name,
        promotion,
        quantity
      ORDER BY
        promotion DESC,
        totalSales DESC;
      `;

    const products = result as Array<any>;

    // Removendo o campo "commonTrucksCount" do objeto antes de retornar a resposta
    const formattedProducts = products.map(
      ({ commonTrucksCount, ...product }) => product,
    );

    return formattedProducts;
  }

  async relatedProducts(productId: string) {
    const result = await this.$queryRaw` 
      SELECT
        productId,
        name,
        promotion,
        quantity,
        COUNT(DISTINCT orderId) AS totalRelations
      FROM
        Order
        JOIN Item ON Order.id = Item.orderId
      WHERE
        productId IN (SELECT productId FROM Order WHERE productId = ${productId})
      GROUP BY
        productId,
        name,
        promotion,
        quantity
      ORDER BY
        totalRelations DESC
      LIMIT 10;
    `;

  const products = result as Array<any>;

  // Removendo o campo "commonTrucksCount" do objeto antes de retornar a resposta
  const formattedProducts = products.map(
    ({ commonTrucksCount, ...product }) => product,
  );

  return formattedProducts;
  }
}
