'use client'

import { HeaderItems } from "@/constants"

export const Header = () => {
  return (
    <div>
      {HeaderItems.map(({ text }) => text )}
    </div>
  )  
}