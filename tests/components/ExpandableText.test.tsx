import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'

describe('Expandable text', () => {
    const longText = "a".repeat(289)
    const truncatedText = longText.substring(0, 255)+'...'


    it('should render full text if text is shorter than 255 letters', () => {
        const lorem = "some text"
        render(<ExpandableText text={lorem}/>)

        const text = screen.getByText(lorem)

        expect(text).toBeInTheDocument()
       
        
    })
    it('should truncate text if more than 255 words', () => {
        render(<ExpandableText text={longText}/>)

        const text = screen.getByText(truncatedText)
        expect(text).toBeInTheDocument()
                                                                    
    })

    it('should show full article when button is clicked', async () => {
        render(<ExpandableText text={longText}/>)

       const button = screen.getByRole('button')
       const user = userEvent.setup()
       await user.click(button)

       expect(button).toHaveTextContent(/less/i)
       expect(screen.getByText(longText)).toBeInTheDocument()
     
       
    })
    it('should collapse article text when button is clicked', async () => {
        render(<ExpandableText text={longText}/>)
       const showMoreButton = screen.getByRole('button', {name: /more/i})
       const user = userEvent.setup()
       await user.click(showMoreButton)

       const showLessButton = screen.getByRole('button', {name: /less/i})
       await user.click(showLessButton)

     expect(showMoreButton).toHaveTextContent(/more/i)
       expect(screen.getByText(truncatedText)).toBeInTheDocument()
 
     
       
    })
})