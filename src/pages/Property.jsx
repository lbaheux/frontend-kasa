import { useParams } from "react-router-dom"
import logements from "../logements.json"

import Slideshow from "../components/Slideshow/Slideshow.jsx"
import Collapse from "../components/Collapse/Collapse.jsx"
import NotFound from "./NotFound.jsx"

import "./Property.scss"

function Property() {
  const { id } = useParams()

  let property = null

  for (let i = 0; i < logements.length; i++) {
    if (logements[i].id == id) {
      property = logements[i]
      break
    }
  }

  if (!property) {
    return <NotFound />
  }

  const {title, location, pictures, tags, host, rating, description, equipments} = property

  return (
    <div className="property">
      <Slideshow pictures={pictures} alt={title} />

      <section className="property__top">
        <div className="property__info">
          <h1 className="property__title">{title}</h1>
          <p className="property__location">{location}</p>

          <div className="property__tags">
            {tags.map((tag) => (
              <span key={tag} className="property__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="property__hostRating">
          <div className="property__host">
            <p className="property__hostName">{host.name}</p>
            <img className="property__hostPic" src={host.picture} alt={host.name} />
          </div>

          <Rating value={rating} />
        </div>
      </section>

      <section className="property__collapses">
        <Collapse title="Description">{description}</Collapse>

        <Collapse title="Équipements">
          <ul className="property__equipments">
            {equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </div>
  )
}

function Rating({ value }) {
  const rating = Number(value)
  const stars = []

  for (let i = 1; i <= 5; i++) {
    let className = "star star__empty"

    if (i <= rating) {
      className = "star star__full"
    }

    stars.push(
      <span key={i} className={className}>
        ★
      </span>
    )
  }

  return (
    <div className="rating">
      {stars}
    </div>
  )
}

export default Property