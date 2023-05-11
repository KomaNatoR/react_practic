import styled from "@emotion/styled";

import bg_mobile_pets from "./bg_img/bg_mobile_pets_full_original.png";
import bg_mobile_paws from "./bg_img/bg_mobile_paws_full_original.png";

export const SectionTag = styled.section`
    position: absolute;

    min-height: calc(100vh - 168px);
    padding: 108px 20px 60px 20px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0,0,0,0);
    background-image:url(${bg_mobile_paws});
    background-position: 0% 0%;

    h1 {
        margin:0;

        font-family: 'Manrope', sans-serif;
        font-size: 32px;
        line-height: 44px;
    }
    div {
        position: absolute;
        top: 216px;
        right: 0;
        bottom: 0;
        left: 0;
        min-height: 384px;

        background-color: rgba(0,0,0,0);
        background-image:url(${bg_mobile_pets});
        background-position: 58% -54px;
        background-size: 475px 457px;
        background-repeat:no-repeat; 
    }
`;