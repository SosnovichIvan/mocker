import { Form } from 'antd'
import { Buttons } from 'supporting/ui/Buttons/ui'

import { FormField } from '../FormFields'

import { InputsData } from './index.types'

export const Forms = (props: InputsData, textButton: string) => {
  const { data } = props

  return (
    <Form>
      {data.map(el => (
        <Form.Item
          key={el.text}
          name={el.text}
          rules={[
            {
              required: true,
              message: `Пожалуйста, введите  ${el.text}!`,
            },
            {
              min: 6,
              message: 'Минимум 6 символов',
            },
            el.type === 'email'
              ? {
                  type: 'email',
                  message: 'Введенный email неверен!',
                }
              : {},
          ]}>
          <FormField {...el} />
        </Form.Item>
      ))}
      <Buttons text={props.textButton} />
    </Form>
  )
}
