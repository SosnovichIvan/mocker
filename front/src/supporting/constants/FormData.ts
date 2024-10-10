import { type FormField } from 'components/formItem'

export const FormData = (): { title: string; field: FormField[] }[] => [
  {
    title: 'Авторизация',
    field: [
      {
        type: 'text',
        name: 'login',
        placeholder: 'Логин/email',
        rule: [
          {
            require: true,
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
        rule: [
          {
            require: true,
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
