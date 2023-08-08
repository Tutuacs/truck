import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './Validation/create-brand.dto';
import { UpdateBrandDto } from './Validation/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandsService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBrandDto) {
    return this.prisma.createBrand(data) ;
  }

  findAll() {
    return this.prisma.findAllBrands();
  }

  findOne(id: string) {
    return this.prisma.findUniqBrand(id);
  }

  update(id: string, data: UpdateBrandDto) {
    return this.prisma.updateBrand(id,data);
  }

  remove(id: string) {
    return this.prisma.removeBrand(id);
  }
}
