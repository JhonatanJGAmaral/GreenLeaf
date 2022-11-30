import MassUnitModel from "../models/MassUnitModel";
import ProductCategoryModel from "../models/ProductCategoryModel";
import ProductModel from "../models/ProductModel";
import UserModel from "../models/UserModel";
import ServiceBase from "./ServiceBase";

export default class UserService extends ServiceBase{
    constructor() {
        super('/User');
    }

    public async saveUser(user: UserModel): Promise<void>{
        return this.post('', user)
    }

    public async login(user: UserModel): Promise<any>{
        return this.post('/login', user)
    }
}