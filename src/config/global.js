export default {
  global: {
    componenteFormativo: 'Requerimientos del turista',
    descripcionCurso:
      'En este componente formativo se presentarán los requerimientos que tiene un turista al momento de visitar un destino, los cuales promueven la perfilación de los viajeros, de acuerdo con los elementos turísticos. Además, se incluyen las técnicas de comunicación, que son una gran herramienta para el turismo actual y los posibles errores que se pueden presentar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de comunicación ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requerimientos según el turista',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Viajero',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad y protocolos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Atención al cliente.',
      referencia:
        'Villacis, J. L. R. (2018). La calidad del servicio y satisfacción del cliente: binomio clave en agencias de viajes en Ecuador. <i>Revista Memoralia,</i> (15), 128-139.',
      tipo: 'Artículo',
      link:
        'http://revistas.unellez.edu.ve/index.php/rmemoralia/article/view/777 ',
    },
    {
      tema: 'motivaciones',
      referencia:
        'Pereira, G. A., & Gosling, M. (2017). Los viajeros y sus motivaciones: Un estudio exploratorio sobre quienes aman viajar. <i>Estudios y perspectivas en turismo,</i> 26 (1), 62-85. ',
      tipo: 'Investigación ',
      link: 'http://www.scielo.org.ar/pdf/eypt/v26n1/v26n1a04.pdf ',
    },
    {
      tema: 'viajero.',
      referencia:
        'La Barbera, M. (2016). Interseccionalidad, un “concepto viajero”: orígenes, desarrollo e implementación en la Unión Europea. <i>INTER disciplina,</i> 4(8). ',
      tipo: 'Artículo ',
      link: 'http://revistas.unam.mx/index.php/inter/article/view/54971/48820',
    },
    {
      tema: 'seguridad',
      referencia:
        'Sarabia Tipán, D. M. (2019). <i>Diseño definitivo del camino vecinal Boca del Sucio-Las Delicias-San Salvador, ubicado en la parroquia San Gregorio, del cantón Muisne, de la provincia de Esmeraldas.</i> (Tesis de licenciatura). ',
      tipo: 'Investigación',
      link: 'http://dspace.ups.edu.ec/handle/123456789/16879',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'Es la relación participativa de dos o más personas por medio de un canal comunicativo.',
    },
    {
      termino: 'Costumbre',
      significado:
        'Es la manera en que siempre se realiza una actividad. También indica la manera en que actúa comúnmente una persona.',
    },
    {
      termino: 'Expresión',
      significado:
        'Demostrar de manera clara, las ideas, pensamiento o conjeturas que se tengan con relación a algo.',
    },
    {
      termino: 'Filtro',
      significado:
        'Es una herramienta de comunicación que sirve para separar ideas o dividir conceptos estratégicamente.',
    },
    {
      termino: 'Motivación',
      significado:
        'Es la acción que incita a una persona a realizar cualquier acción.',
    },
    {
      termino: 'Necesidad',
      significado:
        'Es la falta de un aspecto o cosa en la vida de alguien, la cual debe ser suplida porque se considera imprescindible.',
    },
    {
      termino: 'Población',
      significado:
        'Es un conjunto de seres vivos u habitantes de una misma especie que se encuentran ubicados en un lugar en específico.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'Es una petición o exigencias que tiene una persona frente a diversas actividades.',
    },
    {
      termino: 'Técnica ',
      significado:
        'Es una herramienta de conocimientos y habilidades que le permiten a cualquier persona el desarrollo de una actividad práctica.',
    },
    {
      termino: 'Verbal',
      significado:
        'Es algo que se puede representar mediante palabras o textos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Libro de la Ballina, F. J. (2018). <i>Marketing turístico aplicado</i>. Alpha Editorial.',
    },
    {
      referencia:
        'Estudio investigativo | Pereira, G. A., & Gosling, M. (2017). Re: <i>Los viajeros y sus motivaciones: Un estudio exploratorio sobre quienes aman viajar. Estudios y perspectivas en turismo,</i> 26(1), 62-85.',
      link: 'http://www.scielo.org.ar/pdf/eypt/v26n1/v26n1a04.pdf',
    },
    {
      referencia:
        'Libro | Kotler, P. & Armstrong, G. (2007) Re: <i>Principios de marketing.</i> Prentice Hall, São Paulo. ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=86V4nK6j0vIC&oi=fnd&pg=PA1&dq=Princ%C3%ADpios+de+marketing+%2B+Kotler&ots=dX0NLpaeIk&sig=RxjZQeHh_Quow8o2gK0nranoA_I#v=onepage&q=Princ%C3%ADpios%20de%20marketing%20%2B%20Kotler&f=false',
    },
    {
      referencia:
        'Página web | OMT, CST: RMC (2008) Re: <i>Definición de Viajero.</i> UNESCO. GLOSARIO DE TÉRMINOS DE TURISMO.',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
