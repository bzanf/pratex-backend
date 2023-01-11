export class User {

    private _id: string;
    private _name: string;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
    }

    get name() {
        return this._name;
    }

}