import React from "react";
import { HeaderContainer ,
    HeaderRow,
    ProfileButton,
    ProfileImage,
    HeaderRightSide,
    SerachButton,
    BackButton,
    HeaderBtnIcon,
} from "./style";
const Header=()=> {

    return(
        <HeaderContainer>
            <HeaderRow>
                <ProfileButton>
                    <ProfileImage src="icons/girl.png"/>
                </ProfileButton>
                <HeaderRightSide>
                    <SerachButton>
                        <HeaderBtnIcon src="icons/search.svg"/>
                    </SerachButton>
                    <BackButton>
                        <HeaderBtnIcon src="icons/back.svg" />
                    </BackButton>
                </HeaderRightSide>
            </HeaderRow>
        </HeaderContainer>
    )
}
export default Header;

