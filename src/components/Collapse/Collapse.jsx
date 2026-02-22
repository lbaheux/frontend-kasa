import { useState } from "react"
import "./Collapse.scss"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
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

      {isOpen && (
        <div className="collapse__content">{children}</div>
      )}
    </div>
  )
}
