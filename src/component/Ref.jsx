import { useRef } from "react"


const Ref = () => {
   let ref = useRef(0);
   console.log('useref...')

   function handleClick(){
    ref.current = ref.current +1;
    console.log(ref.current);
   }
  return (
    <>
      <h2>useRef</h2>
      <button onClick={handleClick}>UseRef</button>
    </>
  )
}

export default Ref