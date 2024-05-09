import {mount} from '@vue/test-utils'
import AppHeader from '@/components/AppHeader/index.vue'

describe('AppHeader', () => {
  const wrapper = mount(AppHeader)

  it('has AppHeader class', () => {
    expect(wrapper.classes()).toContain('AppHeader')
  })

  it('has a logo', () => {
    expect(wrapper.find('AppLogo').exists()).toBe(true)
  })

  it('has a nav and links', () => {
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
    expect(nav.findAll('AppLink').length).toBe(2)
  })
})
