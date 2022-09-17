// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    title: "Página Inicial",
    icon: "home",
    router: "/",
  },
  {
    title: "Pacientes",
    icon: "persons",
    router: "/pacientes",
  },
  {
    title: "Calendário",
    icon: "calendar_month",
    router: "/agenda",
  },
  {
    title: "Financias",
    icon: "calendar_month",
    router: "/financias",
  },
  {
    title: "Exemplos",
    icon: "personAdd",
    router: null,
    children: [
      {
        title: "exemplo 1",
        router: "/",
      },
      {
        title: "exemplo 2",
        router: "/",
      },
    ],
  },

  {
    divisor: true,
  },
  {
    title: "Sair",
    icon: "logout",
    router: null,
    children: [],
  },
];
