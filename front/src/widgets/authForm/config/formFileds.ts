import { type FormField } from 'components/formItem'

export const FormFileds: { fields: FormField[] }[] = [
  {
    fields: [
      {
        type: 'text',
        name: 'login',
        placeholder: 'Логин/email',
        id: 'authLogin',
        rules: [
          {
            required: true,
            message: 'Пожалуйста, введите  логин/email',
          },
          {
            min: 6,
            message: 'Минимум 6 символов',
          },
        ],
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Пароль',
        id: 'authPassword',
        rules: [
          {
            required: true,
            message: 'Пожалуйста, введите  пароль',
          },
          {
            min: 6,
            message: 'Минимум 6 символов',
          },
        ],
      },
    ],
  },
]
