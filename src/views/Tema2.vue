<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requerimientos según el turista

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.svg')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-0 En el turismo es importante tener en cuenta las necesidades y preferencias de las personas o visitantes al momento de viajar, lo cual le permite a cualquier prestador de servicio brindarle u ofertarle atractivos turísticos dependiendo sus necesidades, teniendo en cuenta las motivaciones que lo podrían incitar a viajar, así como también las experiencias que quisiera recibir al momento de visitar un lugar. Siempre se tienen en cuenta las tendencias del mercado turístico, permitiendo al prestador generar una segmentación de mercados y de servicios para el turista.

    separador

    #t_2_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.1 Necesidades 

    .row.justify-content-center.my-5
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='').img-flotante      
      .col-lg-10
        p Dependiendo de los hechos o las circunstancias que inciten a una persona a viajar, se determinan ciertas necesidades, las cuales son fundamentales para la estadía del turista en ciertos lugares. Los visitantes pueden crear aspectos específicos con relación a lo que están acostumbrados a realizar dentro de sus actividades cotidianas. 
        p A continuación, veremos cómo se expresan las necesidades de una persona según la pirámide de Maslow.

    .row.justify-content-center.my-5
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.tarjeta--rosa1.p-4
          .row.justify-content-center.mb-4
            .col-6.col-lg-7.mt-3
              figure
                img(src='@/assets/curso/temas/tema2/img3.svg', alt='')            
          h2.text-center Necesidades diferentes
          p.text-center Cada persona tiene necesidades diferentes y es indispensable que el prestador del servicio las identifique, ofreciendo lo justo y necesario al turista cuando se conforma un paquete de servicios. 
        
        .col-md.tarjeta.tarjeta--rosa2.p-4
          .row.justify-content-center.mb-4
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema2/img4.svg', alt='')            
          h2.text-center Necesidades de los turistas
          p.text-center Muchos prestadores de servicios logran identificar las necesidades de los turistas ubicándolos en una pirámide de necesidades de Maslow, donde se ubican primordialmente los servicios relacionados con las necesidades básicas de cada persona y la relacionan con la calidad que esté dispuesto a pagar.
       
        .col-md.tarjeta.tarjeta--rosa1.p-4
          .row.justify-content-center.mb-4
            .col-6.col-lg-7
              figure
                img(src='@/assets/curso/temas/tema2/img5.svg', alt='')            
          h2.text-center Seguridad del visitante
          p.text-center De la seguridad del visitante se desprende una infinidad de productos relacionados con lo que esté acostumbrado a consumir o lo que esté dispuesto a hacer, dependiendo de las tarifas de servicio.

    separador

    #t_2_2 
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.2 Requerimientos 

    .row.my-5
      p Cuando se habla de los requerimientos necesarios para atender a un turista en un destino, atractivo o servicio turístico, se alude fundamentalmente a dos: las necesidades específicas acorde al destino y los requisitos que tenga el destino o atractivo a visitar.
      p.mt-3 Estos requerimientos por lo general son documentos específicos necesarios para la estadía o la visita a un lugar, los cuales suelen encontrarse dentro de las políticas de territorio de un servicio turístico. 

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Requerimientos del turista

    .row.justify-content-center.texto-blanco.my-5
      .col-8.col-lg-2.my-4
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt")
          .crd_hover_txt--body2
            p.texto-negro.text-center.text-bold.mt-5 Definir el motivo y objetivo del viaje.

      .col-8.col-lg-2.my-4
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img7.svg", alt="alt")
          .crd_hover_txt--body2
            p.texto-negro.text-center.text-bold.mt-4 Contar con permiso fronterizo o visa, dependiendo del lugar.

      .col-8.col-lg-2.my-4
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img8.svg", alt="alt")
          .crd_hover_txt--body2
            p.texto-negro.text-center.text-bold.mt-4 Contar con pasaporte y documentos de identidad.

      .col-8.col-lg-2.my-4
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt")
          .crd_hover_txt--body2
            p.texto-negro.text-center.text-bold.mt-3 Contar con la solvencia económica necesaria para el ingreso a un destino.

      .col-8.col-lg-2.my-4
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt")
          .crd_hover_txt--body2
            p.texto-negro.text-center.text-bold.mt-4 Identificar los lazos y relaciones sociales del turista.

    separador

    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.3  Motivaciones 

    .row.justify-content-center.my-5
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='').img-flotante      
      .col-lg-9
        p Cuando se habla de las motivaciones de los turistas, es indispensable resaltar la razón principal que impulsa a una persona a viajar, siempre teniendo en cuenta las necesidades en relación con la motivación, ya que esta afecta el ánimo que tenga la persona al momento de suplir la necesidad que lo lleva a viajar.
        p La motivación del turista también se encuentra relacionada con temas psicológicos que le permiten adquirir los beneficios para la salud mental. 
        p En el entorno turístico existen documentos cuyos autores agrupan las motivaciones de una manera similar, como lo son Dias & Cassar (2005, 126), con un pensamiento similar al de Kotler & Armstrong (2007, 1), quienes agrupan las motivaciones así:

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Motivaciones del turista

    .row.my-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.bgr-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img12.svg' alt='AvatarTop')
          h4.text-center.mt-5 Físicas
          p.text-center Relacionadas con la salud física y mental, el entretenimiento, el descanso y la reducción del estrés.

        .tarjeta.bgr-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img13.svg' alt='AvatarTop')
          h4.text-center.mt-5 Psicológicas (o interpersonales)
          p.text-center Desarrollo emocional, visita a familiares y amigos, establecimiento de nuevas relaciones.

        .tarjeta.bgr-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img14.svg' alt='AvatarTop')
          h4.text-center.mt-5 Culturales
          p.text-center Evolución personal por medio del conocimiento de otras culturas y países o de la ampliación del conocimiento artístico e histórico.

        .tarjeta.bgr-carrusel.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/img15.svg' alt='AvatarTop')
          h4.text-center.mt-5 Sociales o de prestigio
          p.text-center Que permiten que el individuo sea reconocido y apreciado.

    separador

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.4 Experiencias 

    .row.justify-content-center.my-5
      .col-lg-8
        .cajon.color-acento-contenido.p-3
          p A continuación, se describen aspectos relacionados con las experiencias turísticas y su concepto.   

    .row.my-5
      p Las experiencias son el resultado y la base fundamental del turismo; es decir, la mayoría de las empresas turísticas y los prestadores de servicios se basan en la generación de experiencias al momento de iniciar o prestar un servicio, y además, convierten la experiencia en la finalidad del servicio. 

    .row.justify-content-center.my-5
      TabsA.color-acento-contenido
        .tarjeta.tarjeta--rosa.p-5(titulo="Vivencias")
          .row.justify-content-center
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img16.svg', alt='')    

            .col-lg-10
              p Es importante tener en cuenta que las experiencias turísticas son el conjunto de vivencias adquiridas durante un viaje, un recorrido o el desarrollo de una actividad turística, que pueden ser descritas de manera positiva o negativa.

        .tarjeta.tarjeta--rosa.p-5(titulo="Crónicas narrativas")
          .row.justify-content-center
            .col-7.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img17.svg', alt='')             

            .col-lg-10
              p En la actualidad, tanto los prestadores de servicio como las empresas turísticas están manejando la experiencia turística como estrategia de marketing y mercadeo, donde promocionan el destino mediante experiencias redactadas por tales empresas o por personas que hayan realizado la visita a cierto lugar. También desarrollan crónicas narrativas enriquecidas con imágenes, donde cuentan las experiencias y las vivencias de manera poética, permitiendo al turista imaginarse la actividad o el atractivo al momento de leer la crónica.

    separador

    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.5 Tendencias y moda 

    .row.justify-content-center.my-5
      .col-8.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='').img-flotante      
      .col-lg-10
        p En el turismo, como en cualquier otra industria, se tienen en cuenta tanto las tendencias como las modas, debido a que este hace parte de un sector cambiante.
        p Veamos los diversos aspectos que inciden en las tendencias y modas turísticas. 

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Moda en el turismo 
              p La moda en el turismo también juega un papel importante, ya que está compuesta por un conjunto de características basadas en los gustos y preferencias de cada persona al momento de viajar.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img19.svg', alt='')  

          .row
            .col-md-7.mb-4.mb-md-0
              h4 Herramientas electrónicas y cibernéticas
              p Ahora bien, las tendencias y las modas en el turismo se ven influenciadas en la actualidad gracias a las herramientas electrónicas y cibernéticas que existen, mediante las cuales se generan imaginarios en las personas, que influyen en su toma de decisiones al momento de realizar un viaje y que varían dependiendo del interés de las personas y la época del año.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img20.svg', alt='')  

          .row
            .col-md-7.mb-4.mb-md-0
              h5 Tipos de turismo 
              p Cabe resaltar que las modas y las tendencias varían según el tipo de turismo, ya que en cada tipología existen ideas innovadoras que le permiten renovarse y adecuarse a la oferta y a la demanda actual.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img21.svg', alt='')  

          .row
            .col-md-7.mb-4.mb-md-0
              h5 Estacionalidad de los países
              p También la moda varía dependiendo el destino y la estacionalidad de los países. Es decir, ciertos destinos nacionales se ponen de moda durante un lapso de tiempo, lo mismo pasa con los destinos internacionales, los cuales aumentan su concurrencia dependiendo de la estación o época del año.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img22.svg', alt='')  

    separador

    #t_2_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.6  Costumbres y cultura 

    .row.my-5
      p Teniendo en cuenta que existen diversidad de turistas con diferentes prioridades al momento de realizar un viaje, también se pueden encontrar turistas cuyos requerimientos se basan en conocer nuevas culturas y costumbres diferentes.

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img23.svg')})`}"
          )
          .bloque-texto-g2__texto.p-3
            p.mb-0 Es de recordar que la cultura es el conjunto de acciones, conocimientos e ideas que hacen parte de una población, lo cual es un atractivo para muchas personas. Ahora bien, la costumbre está fuertemente ligada a la cultura.
            p.mt-3 Dentro de las costumbres se pueden encontrar todos los escenarios turísticos que hacen parte del recurso cultural intangible, como festivales que se celebran en determinadas líneas del tiempo. Por lo general, las costumbres tienen un trasfondo social, ya sea positivo o negativo.

    separador

    #t_2_7
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 2.7 Técnicas de segmentación 

    .row.my-5
      p A continuación, se describen algunos aspectos que se deben considerar al momento de segmentar un mercado.

    .row.my-5
      .col-lg-10
        .tarjeta--rosa3.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img24.svg', alt='').img24-a-27-t2
            .col-lg-7
              h5 Objetivos de viaje
              p Lo primero que se debe tener en cuenta para realizar una segmentación son los objetivos principales por los que se realiza, al igual que tener definido el mercado en donde se realizará la segmentación, es decir, el mercado turístico para este caso.        

        .tarjeta--rosa2.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img25.svg', alt='').img24-a-27-t2
            .col-lg-7
              h5 Mercado turístico
              p Cuando se habla de segmentación, es válido recordar que esta es una acción que permite dividir el mercado turístico en diferentes segmentos o grupos, con la necesidad de dar un enfoque diferente a cada uno.

        .tarjeta--rosa1.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img26.svg', alt='').img24-a-27-t2
            .col-lg-7
              h5 Segmentación de mercados
              p La segmentación de mercados turísticos se genera a partir de la diversidad cultural que existe en las diferentes regiones de los países, donde las personas de cada región adquieren necesidades y gustos diferentes al momento de viajar.

        .tarjeta--rosa4.p-3
          .row
            .col-6.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema2/img27.svg', alt='').img24-a-27-t2
            .col-lg-7
              h5 Grupos de turista
              p En el turismo, la segmentación puede llegar a ser algo compleja según como se emplee, ya que existen técnicas definidas según cada autor; también se puede segmentar de la manera más sencilla, como lo es dividir el mercado por grupos dependiendo las regiones, edades, aspectos socioeconómicos, gustos y preferencias.

      .col-6.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img28.svg', alt='').img28-tm2

    .row.my-5
      p Veamos a continuación las etapas que intervienen en la segmentación de mercados, enfocadas al sector turístico.

    .row.justify-content-center.my-5
      .col-lg-6
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Etapa 1")
            p En esta se debe dividir el mercado turístico por grupos o segmentos.
            p #[strong Descripción de la etapa:] los segmentos pueden ser divididos de manera geográfica, demográfica o psicográfica.
          .row(numero="2" titulo="Etapa 2")
            p Se selecciona un segmento en específico.
            p #[strong Descripción de la etapa:] dependiendo los rasgos elegidos al momento de la segmentación, se selecciona un segmento objetivo.

          .row(numero="3" titulo="Etapa 3")
            p Elaborar un producto turístico con relación al segmento.
            p #[strong Descripción de la etapa:] se diseña o se asocia un producto turístico (puede ser uno que ya esté elaborado), el cual cumpla con los rasgos del segmento, para llevar a cabo el posicionamiento del producto en el segmento turístico.

          .row(numero="3" titulo="Etapa 4")
            p Elaborar un producto turístico con relación al segmento.
            p #[strong Descripción de la etapa:] se diseña o se asocia un producto turístico (puede ser uno que ya esté elaborado), el cual cumpla con los rasgos del segmento, para llevar a cabo el posicionamiento del producto en el segmento turístico.
 
      .col-6.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img29.svg', alt='')



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
