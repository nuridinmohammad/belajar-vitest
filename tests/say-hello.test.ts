import { sayHello } from "../src/say-hello"


describe('Counter', () => { 
    test('should Hello Nuridin', () => { 
        const result = sayHello("Nuridin")
        expect(result).toBe("Hello, Nuridin")
     })
 })