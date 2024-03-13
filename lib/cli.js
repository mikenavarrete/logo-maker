const inquirer = require( 'inquirer' );
const {Circle,Triangle,Square} = require ('./shapes');
const {writefile} = require('fs/promises')


class Questions {
    run(){
        return inquirer.prompt
        ([
            {
                name: "text",
                type: "input", 
                message: "Enter the text for your logo",
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter the color of your text",
            },
            {
                name: "shape",
                type: "list",
                message: "Please choose a shape", 
                choices:  ["Circle","Triangle","Square"]
            },
            {
                name: "shapeColor",
                type:  "input",
                message: "Enter the color of your shape",
            },
        ]).then(({text, textColor, shape, shapeColor})=>{
            let shapeType;
            switch(shape){
                case"circle":
                shapeType=new  Circle();
                break;
                case "triangle":
                shapeType= new Triangle();
                break;
                default: 
                shapeType= new Square() ;
            }
            shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shapeType);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
        })

    }
}module.exports = Questions