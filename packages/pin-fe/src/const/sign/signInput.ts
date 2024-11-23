export const signInInputs = [
  {
    label: "Email address",
    key: 'email',
    isRequired: true,
    type: 'text'
  },
  {
    label: 'Password',
    key: 'password',
    isRequired: true,
    type: 'password'
  }
]

export const signUpInputs = [
  [
    {
      label: 'First name',
      key: 'firstName',
      isRequired: true,
      type: "text"
    },
    {
      label: 'Last name',
      key: 'lastName',
      isRequired: true,
      type: "text"
    }
  ],
  {
    label: 'Email address',
    key: 'email',
    isRequired: true,
    type: "text"
  },
  {
    label: "Password",
    key: 'password',
    isRequired: true,
    type: 'password'
  }
]