"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyItemDto = exports.UpdateItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_item_dto_1 = require("./create-item.dto");
class UpdateItemDto extends (0, mapped_types_1.PartialType)(create_item_dto_1.CreateItemDto) {
}
exports.UpdateItemDto = UpdateItemDto;
class UpdateManyItemDto extends (0, mapped_types_1.PartialType)(create_item_dto_1.CreateManyItemsDto) {
}
exports.UpdateManyItemDto = UpdateManyItemDto;
//# sourceMappingURL=update-item.dto.js.map