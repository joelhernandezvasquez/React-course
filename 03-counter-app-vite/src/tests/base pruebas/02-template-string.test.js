import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Test in 02-template-string', () => {
    

   test('getSaludo should return "Hola Fernando"', () => {
     
     // initialization

     const name = 'Fernando'
    const message = getSaludo(name)

    expect(message).toBe(`Hola ${name}`)

    })
 })