import * as React from "react"
import { useEffect, useState } from "react"


export default function Diagonal() {
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
          className="diagonal"
          style={{
            transform: `translateY(${offset * (-0.5)}px)
            rotate(45deg)
            translateX(${offset * (1)}px)`,
                      height: '100px',
                      width: '500px',
                      backgroundColor: 'yellow',
                      position: 'absolute',
                      left: '200px',
                      top: '20em'

          }}
        />
      </section>
    </div>
  )
}
