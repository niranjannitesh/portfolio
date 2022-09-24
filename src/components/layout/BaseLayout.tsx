import React from "react"
import Navigation from "./Navigation"

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="flex flex-col justify-center min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(/img/bg-noise.png)`,
      }}
    >
      <div className="fixed top-0 h-[2px] bg-gradient-to-r from-[#A855F7] to-[#F59E0B] w-full"></div>
      {children}
      <Navigation />
    </div>
  )
}

export default BaseLayout
