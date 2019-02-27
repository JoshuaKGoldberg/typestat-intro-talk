class Greeter {
    constructor(name: string) {
        this.name = name;
    }

    greet(message: string) {
        return `${message}, ${name}!`;
    }
}

new Greeter("Satya").greet("Hello");
