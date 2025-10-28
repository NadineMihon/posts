import React from "react";
import * as animationData  from "./loader-animation.json";

import * as SC from "./styles";
import { Container } from "../Container";

export const Loader = () => {
    return (
        <Container>
            <SC.Loader 
                animationData={animationData}
                loop={true}
                autoplay={true}
            />
        </Container>
    )
};