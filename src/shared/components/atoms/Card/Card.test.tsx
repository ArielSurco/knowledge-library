import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card, CardDescription, CardHeader, CardTitle } from './Card'

describe('Card', () => {
  it('should render', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>,
    )

    expect(screen.queryByText('Card Title')).toBeDefined()
    expect(screen.queryByText('Card Description')).toBeDefined()
  })
})
