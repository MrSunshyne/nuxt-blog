const projects = [
  {
    name: 'frontend.mu',
    url: 'https://frontend.mu',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'Astro', 'Vite','Directus'],
    text: 'The home of frontend coders mauritius on the web',
    featured: true,
    thumbnail: 'frontendmu.png',
    year: '2022',
    company: 'Open Source'
  },
  {
    name: 'Mauritius Power Outages',
    url: 'https://power-outages-mauritius.netlify.app/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'Vue3', 'Vite'],
    text: 'A web app to display power outages in Mauritius',
    featured: true,
    thumbnail: 'mauritius-power-outages.png',
    year: '2022',
    company: 'Open Source'
  },
  {
    name: 'Mauritius Electricity Dataset',
    url: 'https://github.com/MrSunshyne/mauritius-dataset-electricity/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'Vue3', 'Vite'],
    text: 'A repository to store and share datasets of power outages in Mauritius',
    featured: true,
    thumbnail: 'electricity.png',
    year: '2022',
    company: 'Open Source'
  },
  {
    name: 'Mauritius Meteo Dataset',
    url: 'https://github.com/MrSunshyne/mauritius-dataset-meteo/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'Vue3', 'Vite'],
    text: 'A repository to store and share datasets of weather in Mauritius',
    featured: true,
    thumbnail: 'meteo.png',
    year: '2022',
    company: 'Open Source'
  },
  {
    name: 'Mauritius Internet Prices',
    url: 'https://mauritius-internet-prices.netlify.app/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'Vue3', 'Vite'],
    text: 'A simple interactive web app to show Mauritius Internet Prices.',
    featured: true,
    thumbnail: 'mauritius-internet-prices.png',
    year: '2022',
    company: 'Open Source'
  },
  {
    name: 'ti-vitesse',
    url: 'https://github.com/MrSunshyne/ti-vitesse',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'Vue3', 'Vite'],
    text: 'An alternate version of antfu/vitesse with stuff that I use',
    featured: true,
    thumbnail: 'ti-vitesse.png',
    year: '2021',
    company: 'Open Source'
  },
  {
    name: 'CSS Clock',
    url: 'https://clock-css.netlify.app/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS', 'Netlify'],
    text: 'A css experiment inspired by a real-like weird clock',
    featured: true,
    thumbnail: 'css-clock.jpg',
    year: '2020',
    company: 'Open Source'
  },
  {
    name: 'Stoic Calendar',
    url: 'https://stoic-calendar.netlify.app/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS', 'Netlify'],
    text: 'An interactive stoic calendar',
    featured: true,
    thumbnail: 'stoic-calendar.jpg',
    year: '2020',
    company: 'Open Source'
  },
  {
    name: 'COVID-19 Mauritius',
    url: 'https://covid19.ramgolam.com',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS', 'Github Actions'],
    text: 'A page focussed on the statistics of COVID-19 in Mauritius',
    featured: true,
    thumbnail: 'covid19-mauritius.png',
    year: '2020',
    company: 'Open Source'
  },
  {
    name: 'COVID-19 Status',
    url: 'https://covid19-status.netlify.com',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS'],
    text: 'A simple tool to check if a country has been affected by COVID-19',
    featured: false,
    thumbnail: 'covid19-status.png',
    year: '2020',
    company: 'Open Source'
  },
  {
    name: 'Mauritius Fuel Prices',
    url: 'https://mauritius-fuel-prices.netlify.app',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS', 'Google Sheet API'],
    text: 'Progression of fuel prices in Mauritius (2002 - Present)',
    featured: true,
    thumbnail: 'mauritius-fuel-prices.png',
    year: '2019',
    company: 'Open Source'
  },
  {
    name: 'Mauritius Sea Cables',
    url: 'https://mrsunshyne.github.io/mauritius-sea-cable/',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS', 'Speedtest CLI', 'git'],
    text:
      'A GUI to show the Health Status of submarine cables connected to Mauritius.',
    featured: true,
    thumbnail: 'mauritius-sea-cables.png',
    year: '2019',
    company: 'Open Source'
  },

  {
    name: 'boo',
    url: 'https://boo.ramgolam.com',
    role: ['Maintainer'],
    tech: ['TailwindCSS', 'VueJS', 'NuxtJS', 'Ghost'],
    text:
      'A free and open source starter theme for headless Ghost CMS built on NuxtJS',
    featured: true,
    thumbnail: 'boo.png',
    year: '2019',
    company: 'Open Source'
  },
  {
    name: 'Developers Conference 2019 Website',
    url: 'https://2019.mscc.mu',
    role: ['Front-end Developer'],
    tech: ['VueJS', 'CSS', 'NuxtJS'],
    text: 'Official website of the devcon 2019',
    featured: true,
    thumbnail: 'devcon2019.png',
    year: '2019',
    company: 'Voluntary'
  },
  {
    name: 'Mauritius Elections 2019 - lexpress',
    url: 'https://elections.mu',
    role: ['Front-end Developer'],
    tech: ['CSS', 'GraphQL', 'VueJS', 'golang', 'Svelte'],
    text:
      "A website built for the general elections of Mauritius at L'express Maurice",
    featured: true,
    thumbnail: 'elections2019.png',
    year: '2015',
    company: 'LSL Digital'
  },

  {
    name: 'Airport Cab Mauritius',
    url: 'https://airportcab.mu',
    role: ['Front-end Developer'],
    tech: ['VueJS', 'CSS', 'NuxtJS'],
    text: 'Taxi reservation service online',
    featured: false,
    thumbnail: 'airportcab.png',
    year: '2019',
    company: 'Freelance'
  },
  // {
  //   name: 'Sai Mauritius',
  //   url: 'https://saibabamauritius.org',
  //   role: ['Front-end Developer'],
  //   tech: ['VueJS', 'CSS', 'NuxtJS'],
  //   text: '',
  //   featured:true,
  // thumbnail: '',
  //   year: '2019',
  //   company: 'Voluntary'
  // },
  {
    name: 'Developers Conference 2018 Website',
    url: 'https://2018.mscc.mu',
    role: ['Front-end Developer'],
    tech: ['VueJS', 'CSS', 'NuxtJS'],
    text: 'Official website of the devcon 2018',
    featured: false,
    thumbnail: 'devcon2018.png',
    year: '2018',
    company: 'Voluntary'
  },
  {
    name: 'lexpress.mu',
    url: 'https://www.lexpress.mu',
    role: ['Front-end '],
    tech: ['CSS', 'Drupal'],
    text: 'Most popular news website of Mauritius',
    featured: true,
    thumbnail: 'lexpressmu.png',
    year: '2015',
    company: 'LSL Digital'
  }
]

export { projects }
