import {createSignal} from "solid-js";

const [toastList, setToastList] = createSignal({"": ""})

export function Toast() {
    return (
        <div className="z-10 toast toast-top toast-end">
            {
                Object.keys(toastList()).map((element) => (
                        toastList()[element]
                    )
                )}
        </div>
    )
}

export function CreateToast(type) {
    switch (type) {
        case "download":
            setToastList()
    }
}