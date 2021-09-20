export const sessionData = JSON.parse(sessionStorage.getItem('personal-info-card'));
export const localData = JSON.parse(localStorage.getItem('personal-info'));

export const removeFromLocalStorage = (state, toRemoveItemNo) => {
  return [...state.filter(item => item !== toRemoveItemNo)]
};

const cookieExpiration = 444000
export const date = Date.parse(new Date()) + cookieExpiration
