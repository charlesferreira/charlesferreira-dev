import {mount} from '@vue/test-utils'
import AppLink from '@/components/AppHeader/AppLink.vue'

describe('AppLink', () => {
  const wrapper = mount(AppLink, {
    props: {
      to: '/about'
    },
    slots: {
      default: 'About'
    }
  })

  it('has AppLink class', () => {
    expect(wrapper.classes()).toContain('AppLink')
  })

  it('renders the router link', () => {
    const routerLink = wrapper.find('RouterLink')
    expect(routerLink.exists()).toBe(true)
    expect(routerLink.attributes().to).toBe('/about')
    expect(routerLink.text()).toBe('About')
  })
})
