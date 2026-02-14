import "./Banner.scss"
import bannerImg from "./home_banner.svg"

function Banner() {
  return (
    <section className="banner">
      <img className="banner__img" src={bannerImg} alt="" />
      <div className="banner__overlay" />
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Banner