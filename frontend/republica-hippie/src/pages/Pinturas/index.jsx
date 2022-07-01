import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageIntro from "../../components/PageIntro";
import ProductListItem from "../../components/ProductListItem";
import ProductListItemContainer from "../../components/ProductListItemContainer";
import DetailedBg from "../../components/DetailedBg";

import ceramica_icon from "../../assets/ceramica/ceramica_icon.svg";
import ceramica_xicara_casinha from "../../assets/ceramica/ceramica_xicara_casinha.svg";
import ceramica_vaso_esferico from "../../assets/ceramica/ceramica_vaso_esferico.svg";
import ceramica_conjunto_vasos from "../../assets/ceramica/ceramica_conjunto_vasos.svg";
import ceramica_tigela_pintura_indiana from "../../assets/ceramica/ceramica_tigela_pintura_indiana.svg";
import ceramica_cofre_abobada from "../../assets/ceramica/ceramica_cofre_abobada.svg";
import ceramica_prato_argila from "../../assets/ceramica/ceramica_prato_argila.svg";

const Pinturas = () => {
  return (
    <>
      <Header></Header>
        <DetailedBg>
          <PageIntro
            titleIcon={ceramica_icon}
            title="PINTURAS"
            introContent="A cerâmica é uma técnica de produção de objetos bem antiga e usada por várias culturas diferentes. Geralmente tem argila como matéria prima e é submetida a altas temperaturas. Conheça várias peças feitas por uma técnica que é tão antiga na história da humanidade!"
          ></PageIntro>

          <ProductListItemContainer>
            <ProductListItem
              productImg={ceramica_xicara_casinha}
              productTitle="Xícara casinha branca"
              productValue="50,00"
            ></ProductListItem>
            <ProductListItem
              productImg={ceramica_vaso_esferico}
              productTitle="Vaso esférico marrom"
              productValue="100,00"
            ></ProductListItem>
            <ProductListItem
              productImg={ceramica_conjunto_vasos}
              productTitle="Conjunto vasos brancos"
              productValue="250,00"
            ></ProductListItem>
            <ProductListItem
              productImg={ceramica_tigela_pintura_indiana}
              productTitle="Tigela pintura indiana"
              productValue="40,00"
            ></ProductListItem>
            <ProductListItem
              productImg={ceramica_cofre_abobada}
              productTitle="Cofre abóbada"
              productValue="35,00"
            ></ProductListItem>
            <ProductListItem
              productImg={ceramica_prato_argila}
              productTitle="Prato de argila mosaico"
              productValue="27,50"
            ></ProductListItem>
          </ProductListItemContainer>

        </DetailedBg>
      <Footer></Footer>
    </>
  );
};

export default Pinturas;