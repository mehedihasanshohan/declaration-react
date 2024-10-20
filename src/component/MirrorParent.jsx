import { useState } from "react";
import Mirror from "./components/Mirror";

function MirrorParent() {
    const [color, setColor] = useState("red");

    const handleChangeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <Mirror messageColor={color} />
            <br />
            <button onClick={handleChangeColor}>
                Change Color from Parent
            </button>
        </div>
    );
}

export default MirrorParent;