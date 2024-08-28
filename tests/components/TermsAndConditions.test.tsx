import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'

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
})