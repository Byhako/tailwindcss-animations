import { generatePluginCSS } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwind animations plugin', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Ruben</div>'
    })

    expect(css).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}')
  })

  it('use a predefined animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-300">Ruben</div>'
    })

    expect(css).toMatch('.animate-delay-300{animation-delay:300ms}')
  })

  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[341ms]">Ruben</div>'
    })

    expect(css).toMatch('.animate-delay-\\[341ms\\]{animation-delay:341ms}')
  })

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-300">Ruben</div>'
    })

    expect(css).toMatch('.animate-duration-300{animation-duration:300ms}')
  })

  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[341ms]">Ruben</div>'
    })

    expect(css).toMatch('.animate-duration-\\[341ms\\]{animation-duration:341ms}')
  })
})
