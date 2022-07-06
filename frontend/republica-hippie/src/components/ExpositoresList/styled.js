import styled from "styled-components";
import {Link} from 'react-router-dom';

export const ExpositoresContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ImgContainer = styled.div`
    margin-bottom: 20px;
`

export const InfoExpositores = styled.div`
    margin-left: 10px;
`

export const TitleExpositores = styled.h3`
    margin-bottom: 60px;
`
export const LinkInfo = styled(Link)`
    text-decoration: none;
    color: #C57E5F;
    
    &:hover {
        color: #D79E62;
    }
`