import MassUnitModel from "../models/MassUnitModel";
import ProductCategoryModel from "../models/ProductCategoryModel";
import ProductModel from "../models/ProductModel";
import ServiceBase from "./ServiceBase";

export default class ProductService extends ServiceBase{
    constructor() {
        super('/Product');
    }

    public async getCategories(): Promise<ProductCategoryModel[]>{
        return this.get('/GetCategories')
    }
    
    public async getUnits(): Promise<MassUnitModel[]>{
        return this.get('/GetMassUnits')
    }

    public async saveProduct(product: ProductModel): Promise<void>{
        return this.post('', product)
    }
    
    public async getProducts(): Promise<ProductModel[]>{
        return this.get('/SearchProducts')
    }

    public async getProductsByName(name: string): Promise<ProductModel[]>{
        return this.get(`/SearchProductsByName/${name}`)
    }
}