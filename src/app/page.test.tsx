import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'
 
describe('Home', () => {
  it('renders the main headline', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: /seo, ktoré doručí čísla/i,
      level: 1
    })
 
    expect(heading).toBeInTheDocument()
  })
})
