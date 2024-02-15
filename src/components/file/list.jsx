import ContainerLoadPage from "../../BaseViewElement/ContainerLoadPage";
import {createSignal} from "solid-js";
import {GetFastSearchList} from "../../wrapApi/fastSearch";

export function SearchPreviewList({searchKey, Class}) {
    const [previewSearchLoadPage, setPreviewSearchLoadPage] = createSignal(true)

    const fastSearchList = GetFastSearchList(searchKey);

    return (
        <>
            <ContainerLoadPage zIndex="2"
                               Class={`${previewSearchLoadPage() ? "" : "hidden"} ${Class}`}></ContainerLoadPage>

        </>
    )
}