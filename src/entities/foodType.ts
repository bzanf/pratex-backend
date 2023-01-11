export class FoodType {

    private _foodTypeId: string;
    private _typeName: string;

    constructor(id: string, name: string) {
        this._foodTypeId = id;
        this._typeName = name;
    }

    get foodTypeId() {
        return this._foodTypeId;
    }

    get typeName() {
        return this._typeName;
    }

}