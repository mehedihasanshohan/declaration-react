/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const Panel = ({title, children, handler}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
       <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
    </>
  )
}

export default Panel