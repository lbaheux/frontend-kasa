import "./Banner.scss"

function Banner({ source, title }) {
  return (
    <section className={`banner ${title ? "banner__withTitle" : ""}`}>
      <img className="banner__img" src={source} alt="" />
      <div className="banner__overlay" />
      {title ? <h1 className="banner__title">{title}</h1> : null}
    </section>
  )
}

export default Banner