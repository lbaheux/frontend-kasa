import { Link } from "react-router-dom"
import "./PropertyCard.scss"

function PropertyCard({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="card">
      <img className="card__img" src={cover} alt={title} />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default PropertyCard