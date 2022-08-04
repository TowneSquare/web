import React from "react";
import styled from "@emotion/styled";

const SidebarOption = ({ text, Icon }) => {
    return (
        <div className="sidebarOption">
            <Option>
                <Icon />
                <h2>{text}</h2>
            </Option>
        </div>
    )
}

const Option = styled.h2`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export default SidebarOption;
