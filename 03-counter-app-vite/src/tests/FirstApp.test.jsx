import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Test in <FirstApp/>', () => 
{ 
    test('should match with the snapshot', () => 
    { 
        const title = 'Hola, Soy Goku'
       const {container} = render(<FirstApp title = {title}/>)
       expect(container).toMatchSnapshot()
     })

     test('it should show the title with a h1',()=>{
        const title = 'Hola, Soy Goku'
       const {container,getByText} = render(<FirstApp title = {title}/>)
       expect(getByText(title)).toBeTruthy();

       const h1 = container.querySelector('h1');
       expect(h1.innerHTML).toContain(title);
    
    })
})