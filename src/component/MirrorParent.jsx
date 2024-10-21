import { useState } from "react";
import Mirror from "./Mirror";

function MirrorParent() {
    const [color, setColor] = useState("red");

    const handleChangeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <Mirror messageColor={color}></Mirror>
            <br />
            <button onClick={handleChangeColor}>
                Change Color from Parent
            </button>
        </div>
    );
}

export default MirrorParent;