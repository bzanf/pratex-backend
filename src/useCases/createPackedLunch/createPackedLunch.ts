import { PackedLunchesRepository } from "../../repositories/packedLunchesRepository";
import { PackedLunch } from '../../entities/packedLunch'
import { Food } from "../../entities/food";
import moment from "moment";
import { CustomError } from "../../entities/customError";

interface CreatePackedLunchRequest {
    foodList: Food[];
    userId: string;
}

type CreatePackedLunchResponse = PackedLunch;

export class CreatePackedLunch {

    constructor(
        private packedLunchRepository: PackedLunchesRepository,
    ) { }

    async execute({
        foodList,
        userId
    }: CreatePackedLunchRequest): Promise<CreatePackedLunchResponse> {
        const currentPackedLunch = await this.packedLunchRepository.findByUserAndDate(userId, moment().startOf('day'));

        if (currentPackedLunch) throw new CustomError('Já existe um pedido para o seu usuário.', 422);

        const packedLunch = await this.packedLunchRepository.create(foodList, userId);

        return packedLunch;
    }

}