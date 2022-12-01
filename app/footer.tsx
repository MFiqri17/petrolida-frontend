'use client'
import ListFooter from "./listfooter";
import footerData from "./data/footerList"
import React, {useState} from "react";
const footer = () => {
    const [dataFooter] = useState(footerData);
    return(
        <>
            <ListFooter listfooters={dataFooter} />
        </>
    )
}
export default footer;