import {createSignal} from "solid-js";

const [element, setElement] = createSignal()
const [divHidden, setHidden] = createSignal("hidden")

export default function TopView() {
    return (
        <div class={`${divHidden()} h-screen w-screen`}>
            {element()}
        </div>
    )
}

export function SetTopViewElement(props) {
    setElement(props);
}

export function SetHiddenTopView() {
    setHidden("hidden")
}

export function SetVisibleTopView() {
    setHidden("")
}

export function TopViewVisualState() {
    if (divHidden() == "hidden") {
        return false
    } else {
        return true
    }
}