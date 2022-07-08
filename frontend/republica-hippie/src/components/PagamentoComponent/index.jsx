import React from 'react'
import * as S from './styled';
import FilledElipse from "../../assets/progressbar/FilledEllipse.svg";
import EmptyElipse from "../../assets/progressbar/EmptyEllipse.svg";

const PagamentoComponent = () => {
  return (
    <S.PagContainer>
        <S.ProgressBarContainer>
            <S.PagProgress1 src={EmptyElipse} />
            <S.PagProgress2 src={EmptyElipse} />
            <S.PagProgress3 src={FilledElipse} />

            <S.PagProgressTextContainer>
            <S.PagProgressText>Carrinho</S.PagProgressText>
            <S.PagProgressText style={{ fontWeight: "600" }}>
                Endereço
            </S.PagProgressText>
            <S.PagProgressText>Finalizar</S.PagProgressText>
            </S.PagProgressTextContainer>
        </S.ProgressBarContainer>

        <S.InfoPag>
                <S.InfoTitle>Detalhes da compra</S.InfoTitle>
                <S.InfoItem>Total:</S.InfoItem>
                <S.InfoItem>Endereço de entrega:</S.InfoItem>
        </S.InfoPag>

        <S.InfoText>A finalização da compra será em contato direto com a administração da feira pelo Whatsapp. Ao iniciar a conversa, a administração recebera uma mensagem com as informações da compra e do local de entrega. Clique no botão abaixo para iniciar a conversa</S.InfoText>
        <S.ButtonContainer>
            <S.ButtonPag>Ir para Whatsapp</S.ButtonPag>
        </S.ButtonContainer>
        
    </S.PagContainer>

  )
}

export default PagamentoComponent;