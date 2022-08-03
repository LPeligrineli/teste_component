import { ButtonProps } from "./Button.type"
import style from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({
    children,
    color = 'primary',
    variation = 'with-icon',
    hasIcon }) => {

    hasIcon = variation === 'with-icon' || variation === 'icon-only'
    
    const colorClass = () => {
        switch(color) {
            case 'primary':
                return style.primary
            case 'secondary':
                return style.secondary
        }
    }
    
    
    const Icon = () => {
        return (
            <i>"IC"</i>
        )
    }

    return (
        <button className={`${style.btn} ${colorClass()}`}>
            {hasIcon ? <Icon></Icon> : ''} {children}
        </button>
    )
}

export default Button