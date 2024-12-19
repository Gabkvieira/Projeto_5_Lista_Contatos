import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Botao } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <></>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar para a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
