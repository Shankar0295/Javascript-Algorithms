// 30/11/2021   
// 38.Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
console.log('38.Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).')

class Circle {
    constructor(Radius) {
        this.radius = Radius
    }
    getArea() {
        return Math.PI * (this.radius * this.radius)
    }
    getPerimeter() {
        return 2 * (Math.PI * this.radius)
    }
}

const area = new Circle(11) // get area of circle
const perimeter = new Circle(4.44) // get perimeter of circle
area.getArea(); // 380.132711084365
perimeter.getPerimeter() // 27.897342763877365
// ends here

// 39.code which attempts to add a clone of an array to itself.(given below) There is no error message, but the results are not as expected. Can you fix the code?
console.log('39.code which attempts to add a clone of an array to itself.(given below) There is no error message, but the results are not as expected. Can you fix the code?')
// code for fixing
// function clone(arr) {
// arr.push(arr)
// return arr;
// }

const clone = (arr) => {
    arr.push([...arr])
    return arr;
}

clone([1, 1]) // [1, 1, [1, 1]]
clone([1, 2, 3]) // [1, 2, 3, [1, 2, 3]]
clone(["x", "y"]) // ["x", "y", ["x", "y"]]
// ends here