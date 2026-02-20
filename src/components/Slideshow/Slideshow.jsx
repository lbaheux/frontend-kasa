import { useState } from "react"
import "./Slideshow.scss"

function Slideshow({ pictures }) {
  const [index, setIndex] = useState(0)

  const total = pictures.length
  
  function nextSlide() {
    let next = index + 1
    if (next >= total) {
        next = 0
    }
    setIndex(next)
  }

  function prevSlide() {
    let previous = index - 1
    if (previous < 0) {
        previous = total - 1
    }
    setIndex(previous)
  }

  return (
    <div className="slideshow">
        <img src={pictures[index]} alt="logement" className="slideshow__img" />
        {total > 1 && (
            <>
                <button className="slideshow__arrow slideshow__arrow__left" onClick={prevSlide}>‹</button>
                <button className="slideshow__arrow slideshow__arrow__right" onClick={nextSlide}>›</button>

                <p className="slideshow__counter">{index + 1} / {total}</p>
            </>
        )}
    </div>
  )
}

export default Slideshow