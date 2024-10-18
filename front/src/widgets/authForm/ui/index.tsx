import { Form } from 'antd'
import { FormItemField } from 'components/formItem'

import { FormFileds } from '../config/formFileds'

export const AuthForm = () => {
  return (
    <section>
      <h1>Авторизация</h1>
      <Form>
        {FormFileds.map(el =>
          el.fields.map(field => {
            return <FormItemField key={field.id} {...{ field }} />
          }),
        )}

        <button type="submit"></button>
      </Form>
    </section>
  )
}
