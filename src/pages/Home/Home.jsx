import Banner from "../../components/Banner/Banner.jsx"
import Gallery from "../../components/Gallery/Gallery.jsx"

import homeBanner from "./home_banner.svg"

function Home() {
  return (
    <div className="home">
      <Banner source={homeBanner} title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  )
}

export default Home