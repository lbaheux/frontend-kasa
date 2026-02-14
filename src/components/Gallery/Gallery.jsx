import logements from "../../logements.json"
import Card from "../PropertyCard/PropertyCard.jsx"
import "./Gallery.scss"

function Gallery() {
    const cards = logements.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>
    ))

return <section className="gallery">{cards}</section>
}

export default Gallery