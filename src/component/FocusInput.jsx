import { useRef } from 'react';

function FocusInput() {
  // Step 1: Create a ref for the input element
  const inputRef = useRef(null);

  // Step 2: Function to focus the input when the button is clicked
  const handleFocus = () => {
    inputRef.current.focus(); // Accesses the input element and focuses it
  };

  return (
    <div>
      {/* Step 3: Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
