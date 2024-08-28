import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from '../../src/entities'


const user1: User = {
    id: 3567,
    name: 'Jerry',
    isAdmin: true, 
}
const user2 = {
    id: 3567,
    name: 'Jerald',
    isAdmin: false, 
}

describe('UserAccount', () => {
    it('should render an edit button if user is an admin', () => {
        render(<UserAccount  user={user1} />)

       const button = screen.getByRole('button')
       expect(button).toBeInTheDocument()
       expect(button).toHaveTextContent(/edit/i)
    })

    it('should not render an edit button if user is not an admin', () => {
        render( <UserAccount user={user2}/>)

        const button = screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()
    })

    it('should render Name: (the name of the user)', () => {
        render(<UserAccount user={user1}/>)

        const text = screen.getByText('Jerry')
        expect(text).toHaveTextContent(/Jerry/)
    })
})
