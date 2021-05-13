import * as React from "react"
import { useEffect, useState } from "react"


export default function Banner() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="App">
      <section className="hero">
        <div
          alt="test"
          className="diamond"
          style={{
            transform: `translateY(${offset * (-0.5)}px)
            rotate(45deg)
            translateX(${offset * (-1)}px)`,
                      height: '100px',
                      width: '100px',
                      backgroundColor: 'red',
                      position: 'relative',
                      left: '20%',
                      top: '20em'

          }}
        />
      </section>
    </div>
  )
}
