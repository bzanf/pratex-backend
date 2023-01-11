import moment from "moment";
import { Moment } from "moment";
import { Food } from "./food";
import { User } from "./user";

export class PackedLunch {

    private _id?: string;
    private _createdAt: Moment;
    private _foodList: Food[];
    private _user: User;

    constructor(createdAt: Moment, foodList: Food[], user: User, id?: string) {
        if (id) this._id = id;

        this._createdAt = createdAt;
        this._foodList = foodList;
        this._user = user;
    }

}