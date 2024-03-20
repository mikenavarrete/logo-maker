const inquirer = require( 'inquirer' );
const {Circle,Triangle,Square} = require ('./shapes');
const {writeFile} = require('fs/promises')
const SVG = require("./svg")

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
                case "Circle":
                    shapeType=new  Circle();
                    break;;
                case "Triangle":
                    shapeType= new Triangle();
                    break;
                default: 
                    shapeType= new Square() ;
            }
            shapeType.setColor(shapeColor);

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