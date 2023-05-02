import fs from 'fs';

const path = './files/Products.json';

    class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    }

    export default class ProductManager {
    counter = 0;
    products = [];

    addItem = async (title, description, price, thumbnail, code, stock) => {
        if (this.products.length === 0) {
        this.counter = 1;
        } else {
        this.counter = this.products[this.products.length - 1].id + 1;
        }
    
        const product = new Product(
        this.counter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
        );
    
        this.products.push(product);
    
        await fs.promises.writeFile(
        path,
        JSON.stringify(this.products, null, '\t')
        );
    };

    getProducts = async () =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const productsList = JSON.parse(data);
            this.products = productsList;
            console.log(this.products); 
        }else{
            console.log(this.products); 
        }
    };

    getProductyId = async (id) =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const productsList = JSON.parse(data);
            this.products = productsList;
            const idx = this.products.findIndex((product) => product.id === id);
            if (idx !== -1) {
            console.log(this.products[idx]);
            }}else{
                console.log(idx)
            /* if (idx === -1) {
            console.log("There are no products"); 
            } */
        }
    };


    addProduct = async (title, description, price, thumbnail, code, stock) => {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            this.products = [ ...(JSON.parse(data))]
            this.addItem(title, description, price, thumbnail, code, stock);
        }else{
            this.addItem(title, description, price, thumbnail, code, stock);
    };
    }
    }

