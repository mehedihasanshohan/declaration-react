import { useRef } from 'react';

function ScrollToSection() {
  // Step 1: Create a ref for the section you want to scroll to
  const sectionRef = useRef(null);

  // Step 2: Define a function that triggers the scroll
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Button to trigger the scroll */}
      <button onClick={scrollToSection}>Scroll to Section</button>

      {/* Some filler content to create space on the page */}
      <div style={{ height: '800px' }}>Some content here</div>

      {/* Step 3: Attach the ref to the target section */}
      <div ref={sectionRef} style={{ height: '200px', backgroundColor: 'lightblue' }}>
        Target Section
      </div>
    </div>
  );
}

export default ScrollToSection;
