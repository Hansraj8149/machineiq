import { Children } from "react";

const AuthLayout  = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="felx items-center justify-center">
            {children}
        </div>
    )
}
export default AuthLayout