import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { BrandAbstract } from './functions/brand-abstract';

@Injectable()
export class BrandService {

  constructor(private readonly brandFunctions: BrandAbstract) { }

  create(data: CreateBrandDto) {
    return this.brandFunctions.createBrand(data);
  }

  findAll() {
    return this.brandFunctions.listBrand();
  }

  findOne(id: string) {
    return this.brandFunctions.findBrand(id);
  }

  update(id: string, data: UpdateBrandDto) {
    return this.brandFunctions.updateBrand(id, data);
  }

  remove(id: string) {
    return this.brandFunctions.removeBrand(id);
  }
}
