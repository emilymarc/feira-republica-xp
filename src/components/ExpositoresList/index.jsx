import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { baseUrl, getExpositores } from "../../services/api";
import { toast } from "react-toastify";
import moment from "moment";

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
    let currentDate = new Date(expositor.birth_date);
    let formattedDate = moment(currentDate).format('YYYYMMDD');
    let expositorAge = moment(formattedDate, 'YYYYMMDD').fromNow().split(' ')[0];
    return (
      <S.ExpositoresContainer key={expositor.id_exhibitors}>
        <S.ImgContainer>
          <S.ExpositorImg src={expositor.img} alt="Expositor" />
        </S.ImgContainer>

        <S.InfoExpositores>
          <S.TitleExpositores>{expositor.name}</S.TitleExpositores>
          <p>
            {expositor.profession}<br />
            {expositorAge} anos
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
