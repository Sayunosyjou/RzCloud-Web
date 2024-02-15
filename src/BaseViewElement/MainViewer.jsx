import {children} from "solid-js";

export default function MainViewer(props) {
    const c = children(() => props.children)

    return (
        <>
            {c()}
        </>
    )
}