import { create } from 'zustand'

const useGlobalStore = create(set => ({
  menu: {
    open: false,
    toggle: () => set(state => ({ menu: {...state.menu, open: !state.menu.open }
    })),
    forceClose: () => set(state => ({ menu: {...state.menu, open: false }
    })),
    forceOpen: () => set(state => ({ menu: {...state.menu, open: true }
    }))
  },
  mobile: {
    isMobile: false,
    setIsMobile: (condition) => set(state => ({ mobile: {...state.mobile, isMobile: condition}})),
  }
}))

export default useGlobalStore
