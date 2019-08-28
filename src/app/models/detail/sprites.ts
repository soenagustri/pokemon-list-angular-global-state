export class Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    
    constructor(data: any = {}) {
        this.back_default = data.back_default;
        this.back_female = data.back_female;
        this.back_shiny = data.back_shiny;
        this.back_shiny_female = data.back_shiny_female;
        this.front_default = data.front_default;
        this.front_female = data.front_female;
        this.front_shiny = data.front_shiny;
        this.front_shiny_female = data.front_shiny_female;
    }
}