import React, { useState, useEffect } from "react";
import * as S from "./styled";
import foto from "../../assets/Rectangle 130.svg";
import { baseUrl, getExpositores } from "../../services/api";
import { toast } from "react-toastify";

const ExpositoresList = () => {
  const [expositores, setExpositores] = useState([]);

  useEffect(() => {
    const loadExpositores = async () => {
      try {
        const response = await getExpositores();
        setExpositores(response.data);
      } catch (error) {
        toast.warn(`Erro ao carregar expositores`);
      }
    };
    loadExpositores();
  }, [setExpositores]);

  return expositores.map((expositor) => {
    return (
      <S.ExpositoresContainer>
        <S.ImgContainer>
          <S.ExpositorImg src={expositor.img} alt="Expositor" />
        </S.ImgContainer>

        <S.InfoExpositores>
          <S.TitleExpositores>{expositor.name}</S.TitleExpositores>
          <p>
            {expositor.profession}<br />
            76 anos
          </p>
          <p>
            Contato: {expositor.phone} <br />
            <S.LinkInfo to={`/expositor/${expositor.id_exhibitors}`}>Mais sobre {expositor.name}</S.LinkInfo>
          </p>
        </S.InfoExpositores>
      </S.ExpositoresContainer>
    );
  });
};

export default ExpositoresList;
