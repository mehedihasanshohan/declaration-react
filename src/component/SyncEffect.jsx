import { useState } from "react";
import PlayGround from "./PlayGround";

export default function SyncEffect() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Unmount" : "Mount"} the component
            </button>
            {show && <hr />}
            {show && <PlayGround></PlayGround>}
        </>
    );
}