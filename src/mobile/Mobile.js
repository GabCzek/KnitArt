import React from "react";
import Template from "../templateCreation/CreateTemplate";
import ShowTemplate from "../showTemplate/ShowTemplate";

const Mobile = ({templates, windowWidth}) => {
    return (
        <>
            <Template windowWidth={windowWidth}/>
            {/*<ShowTemplate templates={templates} windowWidth={windowWidth}/>*/}
        </>
    )
}

export default Mobile;