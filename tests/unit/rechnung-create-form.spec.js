import { mount } from '@vue/test-utils'
import RechnungCreateForm from '@/components/RechnungCreateForm'

describe('Testing RechnungCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(RechnungCreateForm)

    // then
    expect(wrapper.find('#rechnung-create-off canvas').classes()).not.toContain('show')
  })
})
