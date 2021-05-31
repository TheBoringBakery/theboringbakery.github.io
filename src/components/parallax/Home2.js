import * as React from "react"
import { useEffect, useState } from "react"
import {
    Image
 } from 'react-bootstrap';


export default function Home2() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
    if (window.pageYOffset <= 3000 && window.pageYOffset > 1500) setOffset(window.pageYOffset - 2500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
      <div className="parent1">
      <Image
        alt="test"
        src="/moon/MoonCaker_3d_try2/mooncaker_bg_3d.png"
        className="parent2"
        style={{
          transform: `translateY(${offset * (0.3)}px)
          translateX(${offset * 0}px)`,

        }}
       />
       <Image
         alt="test"
         src="/moon/MoonCaker_3d_try2/mooncaker_mid_3d.png"
         className="parent2"
         style={{
           transform: `translateY(${(offset - 1060) * (-0.3)}px)
           translateX(${offset * (0)}px)`,
         }}
       />
      <Image
        alt="test"
        src="/moon/MoonCaker_3d_try2/mooncaker_fg_3d.png"
        className="parent2"
        style={{
          transform: `translateY(${(offset - 200) * (0.6)}px)
          translateX(${offset * (0)}px)`,
        }}
      />
        </div>
  )
}
