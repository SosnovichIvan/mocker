import { Form } from 'antd'
import { FormField } from 'components/formItem'
import { InputText } from 'supporting/ui/inputText'

export const Text = (props: FormField) => {
  const { placeholder, name, rules } = props

  return (
    <Form.Item {...{ rules, name }}>
      <InputText {...{ placeholder }} />
    </Form.Item>
  )
}
