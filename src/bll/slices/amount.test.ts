import {IPriceState, setDateDiff, setGoalDate, setTotalAmount} from "./amount";
import amountReducer from './amount'

let state = {} as IPriceState

beforeEach(() => {
  state = {
    totalAmount: null,
    goalDate: "",
    dateDiff: 0,
  }
})

describe('amount slice',  () => {
  test('setTotalAmount', () => {

    const action = setTotalAmount('11111')
    const endValue = amountReducer(state, action)

    expect(endValue.totalAmount).toEqual('11111')

  })
  test('setGoalDate', () => {
    const action = setGoalDate('March 2075')
    const endValue = amountReducer(state, action)

    expect(endValue.goalDate).toEqual('March 2075')
  })
  test('setDateDiff', () => {
    const action = setDateDiff(500)
    const endValue = amountReducer(state, action)

    expect(endValue.dateDiff).toEqual(500)
  })

});
