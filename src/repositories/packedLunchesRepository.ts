import { Moment } from "moment";
import { Food } from "../entities/food";
import { PackedLunch } from "../entities/packedLunch";

export interface PackedLunchesRepository {
    create(foodList: Food[], userId: string): Promise<PackedLunch>;
    delete(puckedLunchId: string): Promise<void>;
    save(puckedLunch: PackedLunch): Promise<PackedLunch>;
    findByUserAndDate(userId: string, date: Moment): Promise<PackedLunch>;
}