import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'



//  should not show anything in the dom if image array is empty
//  ensure images url attributes have the correct link
describe('product image gallery', () => {
    it('should not show anything in the dom if image array is empty', () => {
       const {container} =  render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement()
    })
    it('should render a list of images', () => {
        const imageUrls =[ "tank", "makeup", "fruits"]

        render(<ProductImageGallery imageUrls={imageUrls} />)

            const images  = screen.getAllByRole('img')
            expect(images).toHaveLength(3)

            imageUrls.forEach((url, idx)=>{
                expect(images[idx]).toHaveAttribute('src', url)
               })
    
    })
    
})