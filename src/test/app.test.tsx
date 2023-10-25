import { expect, test, describe, beforeAll } from 'vitest'
import {render, screen} from '@testing-library/react'
// @ts-ignore
import user from '@testing-library/user-event'
import App from '../App'


describe('check test is work', ()=>{
  const sum = (a: number, b: number) => a + b  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe('Render <App/>',()=>{
  beforeAll(()=>{
    render(<App />)
  }),
  test('render App and check input and title to be defined', async () => {
    expect(screen.getByText('React Interview')).toBeDefined()
  })
  test('add and delete item on list', async()=>{
    const input= screen.getByRole('textbox')
    const form= screen.getByRole('form')
    const button= form.querySelector('button')
    
    expect(input).toBeDefined()
    expect(form).toBeDefined()
    expect(button).toBeDefined()
    const text= crypto.randomUUID()
    await user.type(input, text)
    await user.click(button)
    const list = screen.getByRole('list')
    expect(list).toBeDefined()
    expect(list.childNodes.length).toBe(1)

    const item = screen.getByText(text)
    const buttonItem= item.querySelector('button')
    await user.click(buttonItem)
    expect(screen.getByText('Don`t have item already 😔'))

  })
  
})
