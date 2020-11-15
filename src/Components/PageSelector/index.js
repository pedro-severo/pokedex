import React from "react";
import {PageSelectorContainer, PageNumber} from "./styles";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";


const PageSelector = ({pageNumber, nextUrl, previousUrl, handleChangePage}) => {

    return (
        <PageSelectorContainer>
            {previousUrl ? <NavigateBefore onClick={() => handleChangePage(previousUrl, -1)} /> : <p />}
            <PageNumber>{pageNumber}</PageNumber>
            {nextUrl ? <NavigateNext onClick={() => handleChangePage(nextUrl, 1)}/> : <p />}
        </PageSelectorContainer>
    )
}

export default PageSelector