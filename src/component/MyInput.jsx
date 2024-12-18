/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { useImperativeHandle, forwardRef,useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({

    focus() {
      realInputRef.current.focus();
    },
  }));
  return  (
    <>
    <input {...props} ref={realInputRef} />
    </>
  )
});

export default MyInput;