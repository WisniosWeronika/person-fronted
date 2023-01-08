import { mount } from '@vue/test-utils'
import Rechnung from '@/views/Rechnung.vue'
import RechnungCardList from '@/components/RechnungCardList'
import RechnungCreateForm from '@/components/RechnungCreateForm'

describe('Testing Rechnung.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Rechnung)

    // then
    expect(wrapper.text()).toMatch('Rechnung')
  })

  it('should have Rechnung card list component', () => {
    // when
    const wrapper = mount(Rechnung)

    // then
    const cardList = wrapper.findComponent(RechnungCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have persons create form component', () => {
    // when
    const wrapper = mount(Rechnung)

    // then
    const createForm = wrapper.findComponent(RechnungCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
