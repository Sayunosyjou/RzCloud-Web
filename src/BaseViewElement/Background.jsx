import bgPath from "../static/bg.png";
import {children} from "solid-js";

function Background(props) {
    const c = children(() => props.children);

    return (
        <div class="bg-cover bg-center w-screen h-screen max-h-screen flex flex-col"
             style={`background-image: url(${bgPath});`}>
            {c()}
        </div>
    )
}

export default Background;