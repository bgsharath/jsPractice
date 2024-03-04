class Square {
    constructor(height){
        this.height = height
    }
    multiply(width){
        return width * this.height;
    }
    static add(width){
        //return width + this.height; // this height will not accesable
        return width + 4
    }
}

//console.log(Square.multiply(5)) // normal method not able to call withou instantiate
console.log(Square.add(5)) // static function can be called 

const instance = new Square(3)
console.log(instance.multiply(5))