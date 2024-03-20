

const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle Class', () => {
    test('render method generates correct SVG for triangle with color blue', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="155, 0 280, 180 30, 180" fill="blue" />');
    });
});

describe('Square Class', () => {
    test('render method generates correct SVG for square with color blue', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    });
});

describe('Circle Class', () => {
    test('render method generates correct SVG for circle with color blue', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});
