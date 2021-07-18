import * as React from "react"
import { useEffect, useState } from "react"
import '../Clash.css';
import {
    Image
 } from 'react-bootstrap';


export default function Home1() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
    if (window.innerWidth <= 1100 ) {
        if (window.pageYOffset <= 920 && window.pageYOffset > 550) setOffset(window.pageYOffset - 900)
    }
    else if (window.pageYOffset <= 1400 && window.pageYOffset > 350) setOffset(window.pageYOffset - 1350)
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
        src="/moon/left_bg.png"
        className="parent"
        style={{
          transform: `translateY(${offset * (0)}px)
          translateX(${offset * (0)}px)`,

        }}
       />
       <Image
         alt="test"
         src="/moon/left_mid.png"
         className="parent"
         style={{
           transform: `translateY(${offset * (0.2)}px)
           translateX(${offset * (0)}px)`,
         }}
       />
      <Image
        alt="test"
        src="/moon/left_top.png"
        className="parent"
        style={{
          transform: `translateY(${offset * (-0.6) * (-0.6)}px)
          translateX(${offset * (0)}px)`,
        }}
      />
        </div>
  )
}
