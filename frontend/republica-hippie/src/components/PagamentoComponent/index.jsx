import React, { useState, useEffect } from 'react'
import { baseUrl, getOrder } from '../../services/api'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import * as S from './styled';
import FilledElipse from "../../assets/progressbar/FilledEllipse.svg";
import EmptyElipse from "../../assets/progressbar/EmptyEllipse.svg";
import { toast } from "react-toastify";

const PagamentoComponent = () => {
  const { idClient, idOrder } = useParams();
  const accessToken = useSelector((state) => state.user.accessToken);
  const name = useSelector((state) => state.user);
  let formattedName = name.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [order, setOrder] = useState({});
  useEffect(() => {
    const loadOrder = async () => {
      try{
        baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
        const response = await getOrder(idClient, idOrder);
        setOrder(response.data);
      } catch (error) {
        toast.error(`Erro ao carregar a ordem: ${error}`);
      }
    }
    loadOrder();
  }, [setOrder]);

  const itemsArray = order.item_orders?.map(item => {
    return {
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }
  })

  let AutoMessage =  '*🙌 Novo Pedido de República Hippie*\n\nDetalhes do pedido:\n\n*-Cliente:* '+formattedName+' ('+name.email+')\n\n*-Endereço:* '+order.st+', '+order.house_number+' - CEP '+order.zip_cod+' - '+order.district+' - '+order.city+' - '+order.state+'\n\n*-Itens:*\n'+itemsArray?.map(item => item.quantity+'x '+item.name+' - R$ '+(item.price * item.quantity).toFixed(2)).join('\n')+'\n\n*-Total:* R$ '+order.price_order_total+'\n\n\n*A República Hippie agradece pela sua preferência 😍*';

  function sendMessage(){
    let celular = "2198198-5790";
    celular = celular.replace(/\D/g,''); //Deixar apenas números
    
    //Verificar se tem DDI e adicionar se não tiver
    if(celular.length < 13){
      celular = "55" + celular;
    }
    
    let texto = AutoMessage;
    texto = window.encodeURIComponent(texto);
    
    let urlApi = "https://web.whatsapp.com/send";
    
    if(mobileCheck()){
      urlApi = "https://api.whatsapp.com/send";
    }
    
    window.open(urlApi + "?phone=" + celular + "&text=" + texto, "_blank");
    //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
  }

  function mobileCheck(){
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  return (
    <S.PagContainer>
        <S.ProgressBarContainer>
            <S.PagProgress1 src={EmptyElipse} />
            <S.PagProgress2 src={EmptyElipse} />
            <S.PagProgress3 src={FilledElipse} />

            <S.PagProgressTextContainer>
            <S.PagProgressText>Carrinho</S.PagProgressText>
            <S.PagProgressText >Endereço</S.PagProgressText>
            <S.PagProgressText style={{ fontWeight: "600" }}>Finalizar</S.PagProgressText>
            </S.PagProgressTextContainer>
        </S.ProgressBarContainer>

        <S.InfoPag>
                <S.InfoTitle>Detalhes da compra</S.InfoTitle>

                <S.InfoItemContainer>
                  <S.InfoItem>Total: </S.InfoItem>
                  <S.InfoItem>Endereço de entrega: </S.InfoItem>
                </S.InfoItemContainer>

                <S.InfoContainer>
                  <S.Info>R$ {order.price_order_total?.replace('.', ',')}</S.Info>
                  <S.Info>{`${order.st}, ${order.house_number}`}<br/>{`${order.city} - ${order.state}`}</S.Info>
                </S.InfoContainer>
                
        </S.InfoPag>

        <S.InfoText>A finalização da compra será em contato direto com a administração da feira pelo WhatsApp. Ao iniciar a conversa, a administração recebera uma mensagem com as informações da compra e do local de entrega. Clique no botão abaixo para iniciar a conversa</S.InfoText>
        
        <S.ButtonContainer>
            <S.ButtonPag onClick={sendMessage}>Ir para WhatsApp</S.ButtonPag>
        </S.ButtonContainer>
        
    </S.PagContainer>

  )
}

export default PagamentoComponent;