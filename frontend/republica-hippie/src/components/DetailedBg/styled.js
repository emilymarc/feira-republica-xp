import styled from "styled-components"

export const DetailedBg = styled.div`
  background: url('../../../src/assets/detailed-bg-1920.png') center;
  @media screen and (min-width: 1921px) {
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media screen and (max-width: 1650px) {
    background: url('../../../src/assets/detailed-bg-1650.png') center;
  }
  @media screen and (max-width: 1475px) {
    background: url('../../../src/assets/detailed-bg-1475.png') center;
  }
  @media screen and (max-width: 1250px) {
    background: #FFF;
  }
`