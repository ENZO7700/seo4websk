import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'
 
describe('Home', () => {
  it('renders the main headline', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: /seo4web/i,
      level: 1
    })
 
    expect(heading).toBeInTheDocument()
  })
})
