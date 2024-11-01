import { useEffect } from "react"

const CleanUp = () => {
  useEffect(()=>{

    console.log('mounted');

    return () => {
      // console.log('unmounted');
    }
  })
  return (
    <>

    </>
  )
}

export default CleanUp