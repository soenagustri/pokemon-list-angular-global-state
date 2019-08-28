export class MyPokemon {
    name: string;
    url: string;
    id: number;
    alias: string;
    image: string; 
    constructor(data:any={}) {
        this.name = data.name;
        this.url = data.url;
        this.alias = data.alias;
        this.image = data.image;
    }
}