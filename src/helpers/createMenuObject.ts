type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';
// Define o menu ativo
export const createMenuObject = (activeMenu: MenuOptions) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  };

  if(activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
}