import { Inject } from "@nestjs/common";
import { CartFunctions } from "src/cart/functions/cart.filter";
import { PrismaService } from "src/prisma/prisma.service";
import { ProfileFunctions } from "src/profile/functions/profile.filter";
import { UserFunctions } from "src/user/functions/user.filter";

export class AuthVerify {
    constructor(protected readonly prisma: PrismaService,
        @Inject(ProfileFunctions) protected profile: ProfileFunctions,
        @Inject(UserFunctions) protected user: UserFunctions,
        @Inject(CartFunctions) protected cart: CartFunctions,
    ) { }

}