import { mount } from '@vue/test-utils'
import RechnungCardList from '@/components/RechnungCardList'
import RechnungCard from '@/components/RechnungCard'

describe('Testing RechnungCardList.vue', () => {
  it('should render a Rechnung card for each Rechnung', () => {
    // when
    const wrapper = mount(RechnungCardList, {
      propsData: {
        rechnung: [
          {
            id: 1,
            name: 'Strom',
            frist: '08.01.2023',
            kontonummer: '123456789',
            preis: 100
          },
          {
            id: 2,
            name: 'Wasser',
            frist: '18.01.2023',
            kontonummer: '234567890',
            preis: 80
          }
        ]
      }
    })

    // then
    const RechnungCards = wrapper.findAllComponents(RechnungCard)
    expect(RechnungCards.length).toBe(2)
  })
})
