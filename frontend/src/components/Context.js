import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "BMW",
                "src": "https://wallpapercave.com/wp/wp2574805.jpg",
                "description": "BMW AG, is a German automobile.",
                "content": "Bayerische Motoren Werke AG, commonly known as Bavarian Motor Works, BMW or BMW AG, is a German automobile, motorcycle and engine manufacturing company founded in 1916. BMW is headquartered in Munich, Bavaria. It also owns and produces Mini cars, and is the parent company of Rolls-Royce Motor Cars.",
                "price": 40000,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "AUDI",
                "src": "https://images.wallpaperscraft.ru/image/audi_mashina_belyy_83865_1920x1080.jpg",
                "description": "The AUDI AG stands for sporty vehicles, high build quality.",
                "content": "The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world's leading producers of premium cars.",
                "price": 289000,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Bugatti",
                "src": "https://images.wallpaperscraft.ru/image/bugatti_veyron_avto_sportkar_belyj_kapot_fary_lyuks_93487_1920x1080.jpg",
                "description": "The Bugatti is sports car,developed in Germany.",
                "content": "The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Bugatti Engineering GmbH and manufactured by the Bugatti Automobiles SAS in Molsheim, France. The standard Bugatti Veyron also won Top Gear's Best Car Driven All Year award in 2005.",
                "price": 300000,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Mercedes C",
                "src":  "https://images.wallpaperscraft.ru/image/2015_mercedes_benz_coupe_c217_100855_1920x1080.jpg",
                "description": "The Mercedes-Benz C-Class is compact executive cars",
                "content": "The Mercedes-Benz C-Class is a series of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the W168 A-Class arrived in 1997. The C-Class is built at Mercedes-Benz factories in Sindelfingen and Bremen, Germany as well as numerous satellite factories in other countries. The first C-Class (W202) sedan was produced on 1 June 1993 and the first second generation (W203) rolled off the assembly line on 18 July 2000. The C-Class has been available with a 4MATIC (i.e., four-wheel drive) option since 2002. The third generation (W204) was launched in 2007 while the latest generation C-Class (W205) came out in 2014.",
                "price": 62300,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Ford Mustang",
                "src": "https://images.wallpaperscraft.ru/image/ford_mustang_shelby_sportkar_110507_1920x1080.jpg",
                "description": "The Ford Mustang is a series of American automobiles.",
                "content": "The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. The namesake of the automobile segment, the Mustang was developed as a highly styled line of sporty coupes and convertibles derived from existing model lines, initially distinguished by proportions.",
                "price": 20900,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "BMW M6",
                "src": "https://images.wallpaperscraft.ru/image/bmw_m6_gran_coupe_prior_design_tyuning_chetyrekhdvernoe_95316_1920x1080.jpg",
                "description": "The BMW M6 is a high-performance version",
                "content": "The BMW M6 is a high-performance version of the 6 Series marketed under the BMW M sub-brand from 1983–2018 (with a break from 1990–2004). Introduced in the coupe body style, the M6 was also built in convertible and fastback sedan ('Gran Coupe') body styles for later generations.",
                "price": 48000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}