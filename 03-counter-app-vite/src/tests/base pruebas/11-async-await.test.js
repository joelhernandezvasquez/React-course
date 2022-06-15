import { getImagen } from "../../base-pruebas/11-async-await"

describe('Test in 11-async-await', () => 

{
    test('getImagen should return an URL of the Image', async () => 
    {
      const url = await getImagen();
      expect(typeof url).toBe('string');
    })
 })