import * as React from "react"
import { useEffect, useState } from "react"
import '../Clash.css';
import {
    Image
 } from 'react-bootstrap';


export default function Fg1() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
    if (window.innerWidth <= 600 ) {
        if (window.pageYOffset <= 420 && window.pageYOffset > 150) setOffset(window.pageYOffset - 400)
    }
    else if (window.pageYOffset <= 900 && window.pageYOffset > 500) setOffset(window.pageYOffset - 850)
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
        src="/moon/mooncaker_bg_3d.png"
        className="parent"
        style={{
          transform: `translateY(${offset * (0)}px)
          translateX(${offset * (0.5)}px)`,

        }}
       />
       <Image
         alt="test"
         src="/moon/mooncaker_mid_3d.png"
         className="parent"
         style={{
           transform: `translateY(${offset * (0.2)}px)
           translateX(${offset * (0.2)}px)`,
         }}
       />
      <Image
        alt="test"
        src="/moon/mooncaker_fg_3d.png"
        className="parent"
        style={{
          transform: `translateY(${offset * (-1.1) * (-0.3)}px)
          translateX(${offset * (0)}px)`,
        }}
      />
        </div>
  )
}
