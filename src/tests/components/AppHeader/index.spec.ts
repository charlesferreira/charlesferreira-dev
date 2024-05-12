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

  it('has a main nav and links', () => {
    const nav = wrapper.find('nav#main-nav')
    expect(nav.exists()).toBe(true)
    expect(nav.findAll('AppLink').length).toBe(2)
  })

  it('has a social media nav and links', () => {
    const nav = wrapper.find('nav#media-nav')
    expect(nav.exists()).toBe(true)
    expect(nav.findAll('AppMediaLink').length).toBe(3)
  })
})
