import { CartFunctions } from "src/cart/functions/cart.filter";
import { PrismaService } from "src/prisma/prisma.service";
import { ProfileFunctions } from "src/profile/functions/profile.filter";
import { UserFunctions } from "src/user/functions/user.filter";
export declare class AuthVerify {
    protected readonly prisma: PrismaService;
    protected profile: ProfileFunctions;
    protected user: UserFunctions;
    protected cart: CartFunctions;
    constructor(prisma: PrismaService, profile: ProfileFunctions, user: UserFunctions, cart: CartFunctions);
}
