import { Form } from 'antd'
import { FormItemField } from 'components/formItem'

import { AuthFormData } from './authFormData'

export const AuthForm = () => {
  return (
    <section>
      <h1>Авторизация</h1>
      <Form>
        {AuthFormData.map(el =>
          el.field.map(field => {
            return <FormItemField key={field.id} {...{ field }} />
          }),
        )}

        <button type="submit"></button>
      </Form>
    </section>
  )
}
