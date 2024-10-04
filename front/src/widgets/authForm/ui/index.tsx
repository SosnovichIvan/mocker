import { Form } from 'antd'
import { FormItemField } from 'components/formItem'
import { Button } from 'supporting/ui/button'
import { Title } from 'supporting/ui/title'

import { FormFileds } from '../config/formFileds'

export const AuthForm = () => {
  return (
    <section>
      <Title {...{ children: 'Авторизация', level: 1 }} />
      <Form>
        {FormFileds.map(el =>
          el.fields.map(field => {
            return <FormItemField key={field.id} {...{ field }} />
          }),
        )}
        <Button {...{ children: 'Войти', htmlType: 'submit' }} />
      </Form>
    </section>
  )
}
