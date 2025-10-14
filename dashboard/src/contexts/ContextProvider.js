import { useContext, useState, createContext } from 'react';

export const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentMode, setCurrentMode] = useState('Light');
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  


  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value)
  }

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });



  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        initialState,
        screenSize,
        setScreenSize,
        themeSettings,
        setThemeSettings,
        currentMode,
        setCurrentMode,
        currentColor,
        setMode,
        setColor
      }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);