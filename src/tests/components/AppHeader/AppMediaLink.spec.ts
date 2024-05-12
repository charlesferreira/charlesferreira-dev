import {mount} from '@vue/test-utils'
import AppMediaLink from '@/components/AppHeader/AppMediaLink.vue'

describe('AppMediaLink', () => {
  const wrapper = mount(AppMediaLink, {
    props: {
      icon: 'the-icon',
      to: 'the-url',
    },
    slots: {
      default: 'the-text',
    }
  })

  it('has AppMediaLink class', () => {
    expect(wrapper.classes()).toContain('AppMediaLink')
  })

  it('renders the link', () => {
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes().href).toBe('the-url')
    expect(link.text()).toBe('the-text')
  })

  it('renders the icon', () => {
    const icon = wrapper.find('.AppMediaLink__icon')
    expect(icon.exists()).toBe(true)
    expect(icon.attributes().icon).toBe('the-icon')
  })
})
