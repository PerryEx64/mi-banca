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
    type: 'user',
    card: [
      { 
        name: 'Israel Aguilar', 
        type: 'debito',
        number_card: 245689654125 
      }
    ],
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
    type: 'user',
    account_number: 8746523569,
    account_type: 'ahorro',
    history: []
  },
  {
    user: 'asamuel',
    name: 'Samuel',
    lastname: 'Aguilar',
    type: 'admin',
    account_number: 1234567891,
    account_type: 'ahorro',
    history: []
  }
]

export const DataSolicitudDeTarjeta = [
  {
    name: 'Brian Aguilar',
    ingresos: 4500,
    direccion: '18 calle, entre 16 y 17 avenida'
  },
  {
    name: 'Mirza Aguilar',
    ingresos: 3250,
    direccion: '4 avenida, entre 5 y 6 calle, puerto barrios izabal'
  }
]
