import { themeColors } from "./constant/theme";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProp {
  value: typeof themeColors.light;
  children: React.ReactNode;
}
const ThemeProvider = ({ value, children }: ThemeProviderProp) => {
  return <ThemeContext value={value}>{children}</ThemeContext>;
};

export default ThemeProvider;

// We are passing the created variable a componet that will wrap other componet and expore
// a custome hook useContext to be applicable in every component we use.
