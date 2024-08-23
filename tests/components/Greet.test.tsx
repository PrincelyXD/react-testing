import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'


describe('Greet component', () => {
    it('should render hello with the name if name is provided', () => {
        render(<Greet name="Bolu"/>)

       const heading = screen.getByRole('heading')
       expect(heading).toBeInTheDocument()
       expect(heading).toHaveTextContent(/Bolu/i)
    })

    it('should render logIn button  if name is NOT provided', () => {
        render(<Greet/>)

       const button = screen.getByRole('button')
       expect(button).toBeInTheDocument()
       expect(button).toHaveTextContent(/Login/)
    })

})