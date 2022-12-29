import React, {createContext, Component} from "react";
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'
import bgDark from '../images/bg-desktop-dark.jpg';
import bgLight from '../images/bg-desktop-light.jpg';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light:{
            syntax: "hsl(235, 19%, 35%)", 
            ui: "hsl(0, 0%, 98%)", 
            bg:"white", 
            mode:moon,
            hr:"rgb(225, 223, 223)", 
            bmi: bgLight
        },
        dark:{
            syntax:"hsl(233, 11%, 84%)", 
            ui:"hsl(235, 21%, 11%)", 
            bg:"hsl(235, 24%, 19%)",
            mode:sun,
            hr:"rgb(66, 66, 66)", 
            bmi: bgDark
        }
     } 

    toogleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
    }
    
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toogleTheme: this.toogleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;