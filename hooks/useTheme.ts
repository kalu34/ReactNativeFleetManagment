import { useContext } from "react"
import { ThemeContext } from "../Theme/ThemeContext"
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("No Context Found Please Update the user state")
    }
    return context
}