import { FoodType } from "./foodType";

export class Food extends FoodType {

    private _foodId: string;
    private _name: string;

    constructor(typeId:string, typeName: string, id: string, name: string) {
        super(typeId, typeName);
        this._foodId = id;
        this._name = name;
    }

    get foodId() {
        return this._foodId;
    }

    get name() {
        return this._name;
    }

}