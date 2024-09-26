// eslint-disable-next-line import/extensions
import icon1 from 'supporting/image/auth/iconDescriptionOne.png'
// eslint-disable-next-line import/extensions
import icon3 from 'supporting/image/auth/iconDescriptionThree.png'
// eslint-disable-next-line import/extensions
import icon2 from 'supporting/image/auth/iconDescriptionTwo.png'

import * as Styled from './index.styled'

export const ListDescription = () => {
  return (
    <Styled.ListDescription>
      <Styled.ItemDescription>
        <Styled.IconDescription src={icon1} alt="Иконка" />
        <Styled.TextDescription>
          Создавайте реалистичные моки для тестирования API
        </Styled.TextDescription>
      </Styled.ItemDescription>
      <Styled.ItemDescription>
        <Styled.IconDescription src={icon2} alt="Иконка" />
        <Styled.TextDescription>
          Конфигурируйте различные сценарии взаимодействия
        </Styled.TextDescription>
      </Styled.ItemDescription>
      <Styled.ItemDescription>
        <Styled.IconDescription src={icon3} alt="Иконка" />
        <Styled.TextDescription>
          Отслеживайте и&nbsp;анализируйте запросы для улучшения тестирования
        </Styled.TextDescription>
      </Styled.ItemDescription>
    </Styled.ListDescription>
  )
}
