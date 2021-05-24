import * as React from "react"
import { useEffect, useState } from "react"
import {
    Image
 } from 'react-bootstrap';


export default function Bg1() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
    if (window.pageYOffset <= 900 && window.pageYOffset > 500) setOffset(window.pageYOffset - 850)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
        <img
          alt="test"
          src="/moon/mooncaker_bg_3d.png"
          style={{
            transform: `translateY(${offset * (0)}px)
            translateX(${offset * (0.5)}px)`,
                      height: '100%',
                      width: '100%',
                      position: 'relative'
          }}
        />
  )
}
