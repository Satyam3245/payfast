import { ReactNode , FC} from "react"

interface ButtonProps {
    className? : string,
    onClick? : ()=> void,
    children? : ReactNode
}
export const Button:FC<ButtonProps> = ({className,onClick,children})=>{
    return <button className={className} onClick={onClick}>
        {children}
    </button>
} 