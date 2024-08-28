import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'


const users: User[] = [
    {id: 5439, name:'tanjiro', isAdmin: false},
    {id: 5443, name:'cyinthia', isAdmin: false},
    {id: 5654, name:'jerry', isAdmin: false},
]

describe('user list', () => {
    it('should render "no users when the user array is empty"', () => {
        render(<UserList users={[]}/>)
        expect(screen.getByText(/no users/i)).toBeInTheDocument()
        
    })
    it('should render a list of users', () => {
       
        render(<UserList users={users}/>)
        // map through the user array
        // use the user name to check if 
        // each user has the correct hyper link
        
        users.forEach((user)=> {
            // here get by role is passed an optional argument, helping it narrow down on specific links
           const link =  screen.getByRole("link", {name: user.name})
        //    each link mapped over must be in the document and must have the users name in it 
           expect(link).toBeInTheDocument()
        //    code expects link to have a href attribute with ite reference as /users/user.id
           expect(link).toHaveAttribute('href', `/users/${user.id}` )
        })
    })
})