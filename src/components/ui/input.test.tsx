import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from './input'

describe('Input', () => {
  it('renders an input and accepts typing', async () => {
    const user = userEvent.setup()
    render(<Input placeholder="Email" />)

    const input = screen.getByPlaceholderText('Email')
    await user.type(input, 'hello@example.com')
    expect(input).toHaveValue('hello@example.com')
  })

  it('forwards the type attribute and merges className', () => {
    render(<Input type="password" className="custom-input" />)
    const input = document.querySelector('input')
    expect(input).toHaveAttribute('type', 'password')
    expect(input).toHaveClass('custom-input', 'h-9')
  })

  it('can be disabled', () => {
    render(<Input disabled placeholder="Name" />)
    expect(screen.getByPlaceholderText('Name')).toBeDisabled()
  })
})
