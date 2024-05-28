import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

export class TruckVerify {
  constructor(protected readonly prisma: PrismaService) {}

  async exTruckId(id: string): Promise<boolean> {
    return Boolean(await this.prisma.truck.count({ where: { id } }));
  }

  async exTruckName(name: string): Promise<boolean> {
    return Boolean(await this.prisma.truck.count({ where: { name } }));
  }
}