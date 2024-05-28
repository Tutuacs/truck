import { Role } from './role.enums';
export declare const ACESS_KEY = "roles";
export declare const Acess: (...role: Role[]) => import("@nestjs/common").CustomDecorator<string>;
