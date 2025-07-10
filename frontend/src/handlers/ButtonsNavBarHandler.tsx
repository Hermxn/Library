import ButtonsInterface from "../interfaces/InterfaceButtonsNavbar";

const ButtonsNavBarHandler = (buttonsArray: ButtonsInterface[]) => {
  let filteredButtonsArray = buttonsArray;
  const methods = {
    filterLoggedIn: (isLoggedIn: boolean, isAdmin: boolean) => {
      filteredButtonsArray = filteredButtonsArray.filter(
        (button) =>
          button.isLoggedIn === isLoggedIn && button.isAdmin === isAdmin
      );
      return methods;
    },
    createButtons: () => {
      return filteredButtonsArray.map((button) => (
        <button key={button.key} onClick={button.func}>
          <span>{button.key}</span>
        </button>
      ));
    },
  };
  return methods;
};

export default ButtonsNavBarHandler;
