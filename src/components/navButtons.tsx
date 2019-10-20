import React from 'react';
import * as S from '../components/componentsStyles'


export default function NavButtons() {
    return (
        <S.ButtonBlock>
            <S.StyledLink to="/today">
                Today
            </S.StyledLink>
            <S.StyledLink to="/week">
                Week
            </S.StyledLink>
        </S.ButtonBlock>
    )
}
