import {mount} from '@vue/test-utils'
import AppLogo from '@/components/AppHeader/AppLogo.vue'

describe('AppLogo', () => {
  const wrapper = mount(AppLogo)

  it('has AppLogo class', () => {
    expect(wrapper.classes()).toContain('AppLogo')
  })

  it('renders the logo', () => {
    expect(wrapper.text()).toBe('CharlesFerreira')
  })
})
