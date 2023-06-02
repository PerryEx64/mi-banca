import { Dispatch, SetStateAction, createContext } from 'react'

const init = {
  dataUser: {},
  setDataUser: () => {},
  updateMoney: false,
  setUpdateMoney: () => {}
}

export const MainContext = createContext(init)