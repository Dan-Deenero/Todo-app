import { ThemeContext } from '../Contexts/ThemeContext';
import React, {useContext} from "react";
import TodoList from './TodoList';
     

const Home = () => {

    const contextValue = useContext(ThemeContext);

    localStorage.setItem('myContextValue', contextValue);
    localStorage.setItem('myContextValue', JSON.stringify(contextValue));

    const storedValue = JSON.parse(localStorage.getItem('myContextValue'));

    const theme = storedValue.isLightTheme ? storedValue.light : storedValue.dark

    console.log(storedValue.isLightTheme);
    
    const {toogleTheme} = useContext(ThemeContext);
    
    // const {isLightTheme, light, dark, toogleTheme} = useContext(ThemeContext);
    // const theme = isLightTheme ? light : dark
    
    return ( 
        <div className='cont flex justify-center' style={{backgroundColor: theme.ui, color: theme.syntax, backgroundImage: `url(${theme.bmi})`}}>
            <div className='max-w-md w-full my-16'>
                <div className='z-50 w-full flex justify-between items-center'>
                    <h1 className='font-bold text-white tracking-[.45em] text-4xl'>TODO</h1>
                    <img src={theme.mode} alt="" className='w-5 h-5' onClick={toogleTheme}/>
                </div>
                
                <TodoList theme={theme}/>

            </div>
        </div> 
     );
}
 
export default Home;