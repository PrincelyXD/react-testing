import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('Terms and Condition', () => {
    it('should render properly with right heading text', () => {
        render(<TermsAndConditions/>)

       const heading =  screen.getByRole('heading')
       expect(heading).toBeInTheDocument()
       expect(heading).toHaveTextContent(/terms & condition/i)


       const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).not.toBeChecked()
        
      const button =  screen.getByRole('button')
        expect(button).toBeDisabled()

    })

    it('should enable button when checkbox is checked', async () => {
      // Arrange
      render(<TermsAndConditions/>)
      
      // Act
      const checkbox  = screen.getByRole('checkbox')
      const button = screen.getByRole('button')
      const user = userEvent.setup()
     await user.click(checkbox)

    //  Assert
     expect(button).toBeEnabled()
    })
})