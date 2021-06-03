import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state={
        product:[
            {
                "_id":"1",
                "title": "BMW",
                "src": "http://livedemo00.template-help.com/wt_prod-14633/images/home-4-270x150.jpg",
                "Description": "Tovar",
                "Content": "About tovar",
                "price": 5000,
                "color": ["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"2",
                "title": "AUDI",
                "src": "https://images.wallpaperscraft.ru/image/audi_mashina_belyy_83865_1920x1080.jpg",
                "Description": "Tovar",
                "Content": "About tovar",
                "price": 5000,
                "color": ["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"3",
                "title": "Bugatti ",
                "src": "https://images.wallpaperscraft.ru/image/bugatti_veyron_avto_sportkar_belyj_kapot_fary_lyuks_93487_1920x1080.jpg",
                "Description": "Tovar",
                "Content": "About tovar",
                "price": 5000,
                "color": ["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"4",
                "title": "Mercedes C ",
                "src": "https://images.wallpaperscraft.ru/image/2015_mercedes_benz_coupe_c217_100855_1920x1080.jpg",
                "Description": "Tovar",
                "Content": "About tovar",
                "price": 5000,
                "color": ["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"5",
                "title": "Ford Mustang",
                "src": "https://images.wallpaperscraft.ru/image/ford_mustang_shelby_sportkar_110507_1920x1080.jpg",
                "Description": "Tovar",
                "Content": "About tovar",
                "price": 5000,
                "color": ["red","black","crimson","teal"],
                "count":1
            },
            {
                "_id":"6",
                "title": "BMW M6",
                "src": "https://images.wallpaperscraft.ru/image/bmw_m6_gran_coupe_prior_design_tyuning_chetyrekhdvernoe_95316_1920x1080.jpg",
                "Description": "Tovar",
                "Content": "About tovar",
                "price": 5000,
                "color": ["red","black","crimson","teal"],
                "count":1
            }
        ]
    }
    render(){
        const {products} = this.state;
        return (
            <DataContext.Provider value={{products}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


export default DataProvider