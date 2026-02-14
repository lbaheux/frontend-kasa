import "./AboutBanner.scss"
import aboutBanner from "./about_banner.svg"

function AboutBanner() {
  return (
    <section className="aboutBanner">
      <img className="aboutBanner__img" src={aboutBanner} />
      <div className="aboutBanner__overlay" />
    </section>
  )
}

export default AboutBanner