export const UsersCredential = {
  user: 'bisrael',
  password: '12345678'
}

export const DataUsers = [
  {
    user: 'bisrael',
    name: 'Brian',
    lastname: 'Garcia',
    account_number: 2468101214,
    account_type: 'monetaria',
    money: 5000,
    history: [
      {
        type: 'debito',
        amount: 450,
        destination: {
          user: 'Carlos',
          account_number: 8746523569
        },
        description: 'Pago libros de ingles'
      },
      {
        type: 'credito',
        amount: 50,
        origin: {
          user: 'Carlos',
          account_number: 8746523569
        },
        description: 'mi parte de Netflix'
      }
    ]
  },
  {
    user: 'clagos',
    name: 'Carlos',
    money: 3500,
    lastname: 'Lagos',
    account_number: 8746523569,
    account_type: 'ahorro',
    history: []
  },
  {
    user: 'asamuel',
    name: 'Samuel',
    money: 3500,
    lastname: 'Aguilar',
    account_number: 1234567891,
    account_type: 'ahorro',
    history: []
  }
]
