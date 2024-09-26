import { ListDescription } from '../listDescription'

import * as Styled from './index.styled'
export const Overlap = (props: { value: boolean }) => {
  const { value } = props

  return (
    <Styled.OverlapWrapper IsValue={value}>
      <Styled.OverlapBlock>
        <Styled.OverlapBlockHeader>
          <Styled.OverlapBlockHeaderLogo>
            <span>Logo</span>
          </Styled.OverlapBlockHeaderLogo>
          <Styled.OverlapBlockHeaderApplicationName>
            Support Api
          </Styled.OverlapBlockHeaderApplicationName>
        </Styled.OverlapBlockHeader>
        <Styled.OverlapSlogan>
          Создавайте, тестируйте, совершенствуйте.
        </Styled.OverlapSlogan>
        <ListDescription />
      </Styled.OverlapBlock>
    </Styled.OverlapWrapper>
  )
}
