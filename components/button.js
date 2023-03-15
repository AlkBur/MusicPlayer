import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import * as Icons from "@fortawesome/free-solid-svg-icons";

export default ({ Title, Icon }) => {
    const [ishover, sethover] = useState(false);

    const MouseOver = () => {
        sethover(true);
    };
    const MouseOut = () => {
        sethover(false);
    };

    return (
        <div
            className="flex items-center justify-center w-[60px] text-gray-400 hover:text-gray-200"
            title={Title}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
        >
            <FontAwesomeIcon
                icon={Icons[Icon]}
                style={{
                    filter: ishover
                        ? "drop-shadow(1px 1px 2px white)"
                        : "drop-shadow(1px 1px 2px black)",
                }}
            />
        </div>
    );
};
