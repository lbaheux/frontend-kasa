import { useState } from "react"
import "./Collapse.scss"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}>
            
        <span className="collapse__title">{title}</span>
        <span className={`collapse__chevron ${isOpen ? "is-open" : ""}`}>
          ▾
        </span>
      </button>

      <div className="collapse__content">
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  )
}
