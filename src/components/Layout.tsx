import { Navbar } from "./Navbar"
import {ReactNode} from 'react'

interface LayoutProps {
  children: ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar/>
      <main>{children}</main>
    </div>
  )
}
