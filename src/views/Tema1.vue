<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de comunicación 

    .row.justify-content-center.my-5
      .col-8.col-lg-2.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='').img-flotante      
      .col-lg-6
        p La comunicación tiene gran relevancia en el entorno turístico debido a que es uno de los motores principales de crecimiento, permite transmitir mensajes, señales, vivencias y experiencias fundamentales para el turismo. 

    .row.my-5
      p La comunicación permite la transmisión de conocimientos en los diferentes aspectos culturales necesarios para la conservación de la identidad cultural, de todas las personas que forman parte de un territorio en específico.

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row
            .col-md-7.mb-4.mb-md-0
              p La comunicación tiene gran relevancia en el entorno turístico debido a que es uno de los motores principales de crecimiento, permite transmitir mensajes, señales, vivencias y experiencias fundamentales para el turismo, pues aplica tanto para la promoción turística, como para la transmisión de conocimientos en los diferentes aspectos culturales necesarios para la conservación de la identidad cultural de todas las personas que forman parte de un territorio en específico.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='')  

          .row
            .col-md-7.mb-4.mb-md-0
              p La comunicación turística tiene como objetivo principal transmitir ideas y generalidades enfocadas a un destino turístico; es decir, dependiendo el lugar donde se encuentre cualquier atractivo turístico, se puede comunicar un mensaje asertivo al visitante con relación a la actividad que se encuentre desarrollando.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='')  

          .row
            .col-md-7.mb-4.mb-md-0
              p Es de gran importancia la implementación de las características comunicativas en los diferentes entornos turísticos, teniendo en cuenta siempre los actores claves de cada sitio, al igual que al visitante o turista que lo frecuenta. 

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='')  

    separador

    #t_1_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.1 Características

    .row.my-5
      p Generalmente la comunicación se deriva de una conversación que se puede llevar a cabo de manera verbal o no verbal, esto depende de la tipología que se considere emplear.
      p.mt-3 En el turismo se llevan a cabo ambas tipologías de comunicación (verbal y no verbal), las cuales le permiten al prestador de servicio definir su tipología para presentar el mensaje. 
      p.mt-3 La comunicación se caracteriza dependiendo de su tipología así:

    .row.justify-content-center.my-5
      TabsB.color-acento-contenido       
        .py-4.py-md-5(titulo="Tipología verbal" :icono="require('@/assets/curso/temas/tema1/img5.svg')")
          .row.justify-content-center
            .col-8.col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg', alt='') 

            .col-md-7.mt-5
              p Es la que le permite al prestador turístico brindar información de interés turístico sobre un tema preciso. Esta se puede llevar a cabo escrita, mediante textos argumentativos, u oral, mediante información apoyada en argumentos de calidad brindada mediante el habla.

        .py-4.py-md-5(titulo="Tipología no verbal" :icono="require('@/assets/curso/temas/tema1/img7.svg')")
          .row.justify-content-center
            .col-6.col-md-2.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img8.svg', alt='') 

            .col-md-7.mt-3
              p Este tipo de comunicación se encuentra ligada a la percepción turística y hace alusión a los mensajes que son percibidos por el turista, pero que no tienen ningún tipo de narración o de mención. Estos mensajes se expresan de manera visual o mediante la expresión corporal de las personas prestadoras de servicio, y son muy visibles en la interpretación del patrimonio cultural.

        .py-4.py-md-5(titulo="Tipología mixta" :icono="require('@/assets/curso/temas/tema1/img9.svg')")
          .row.justify-content-center
            .col-8.col-md-3.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/img10.svg', alt='') 

            .col-md-7.mt-3
              p Se le denomina comunicación mixta o comunicación completa, ya que involucra tanto la comunicación verbal como la no verbal, es decir, es evidenciable en las demostraciones culturales narradas con una temática en específico, pues permiten una mayor facilidad para la captación del mensaje.

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img11.svg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p.mb-0 Teniendo en cuenta las dos tipologías empleadas para la buena comunicación en el entorno turístico, resulta necesario identificar o definir las características puntuales para la aplicabilidad comunicativa del turismo. Este sector económico se caracteriza por la comunicación, teniendo en cuenta la motivación de la persona y los recursos naturales o culturales donde se emplee.

    .row.my-5
      p La comunicación en el turismo se clasifica en: 

    .row.justify-content-center.my-5
      TabsA.color-acento-contenido
        .tarjeta.tarjeta--rosa.p-5(titulo="Comunicación interna")
          .row.justify-content-center
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img12.svg', alt='').img12-tm1            

            .col-lg-9
              p Comunicación planificada dentro de una organización o empresa turística, relacionada con los clientes internos y orientada a encontrar sus motivaciones personales. En esta se comunican los éxitos de los prestadores de servicio y las ganancias que se generan por su servicio.

        .tarjeta.tarjeta--rosa.p-5(titulo="Comunicación externa")
          .row.justify-content-center
            .col-7.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='')             

            .col-lg-9
              p Se encarga de la comunicación asertiva del cliente interno hacia el cliente externo. Es la encargada de generar emociones y vivencias diferenciadoras en los clientes.

        .tarjeta.tarjeta--rosa.p-5(titulo="Características")
          .row.justify-content-center
            .col-7.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img14.svg', alt='')             

            .col-lg-9
              p Para brindar o generar buena comunicación se hace necesario tener en cuenta las siguientes características:
              ul.lista-ul--color.ps-2.ps-lg-4
                li 
                  i.fas.fa-check.color-vineta
                  | Debe haber como mínimo una persona para dirigir el mensaje.
                li 
                  i.fas.fa-check.color-vineta
                  | El mensaje debe ser fácil de comprender.
                li 
                  i.fas.fa-check.color-vineta
                  | El mensaje debe ser concreto y preciso.
                li 
                  i.fas.fa-check.color-vineta
                  | El mensaje debe tener un desarrollo.
                li 
                  i.fas.fa-check.color-vineta
                  | El mensaje puede desarrollarse mediante comunicación directa o indirecta.
                li 
                  i.fas.fa-check.color-vineta
                  | El mensaje debe pretender un alcance.
                li 
                  i.fas.fa-check.color-vineta
                  | Para finalizar, el mensaje debe tener una retroalimentación o un intercambio de ideas.

    separador

    #t_1_2   
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.2  Componentes 

    .row.justify-content-center.my-5
      .col-8.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='').img-flotante        
      .col-lg-7
        p Existen varios elementos de estructura necesarios a la hora de establecer una comunicación asertiva entre dos o más personas, pues permiten una intención comunicativa concreta y efectiva del mensaje, el cual suele ser procesado mediante una cadena circunstancial.
        p Los componentes de comunicación son los siguientes:

    .row.justify-content-center
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="El emisor")
            p Generalmente es una persona o cosa que se encarga de realizar o enviar un mensaje, es decir, sirve como fuente de información primaria respecto al mensaje emitido. Esta información será recibida por un receptor.
          
          .row(titulo="El receptor")
            p Como su nombre lo indica, es el encargado de recibir o captar el mensaje emitido por una persona o cosa. Dependiendo de las características, este puede ser captado de manera exitosa o de manera errónea. En el caso de los contextos turísticos, puede ser el visitante o el turista que pretende buena comunicación.
          
          .row(titulo="Mensaje")
            p Es el código o la imagen que desea transmitir el emisor al receptor, generalmente puede ser una noticia o información de interés para el receptor; mediante este se puede generar una retroalimentación o una reflexión acerca del tema comunicado. En el caso turístico, se trata de la información que le brinda un prestador de servicio a un turista o visitante.
          
          .row(titulo="Canal")
            p Es el medio por donde se desplaza el mensaje, es decir, el recurso que permite la transmisión de información entre emisor y receptor. En el caso turístico, es el medio por donde le brindan el mensaje al turista, bien sea internet o teléfono o medios publicitarios. Cabe resaltar que la comunicación también se da en cualquier medio interpretativo del turismo.
          
          .row(titulo="Código")
            p Este es el conjunto de letras, ruidos o imágenes que conforman un mensaje.
          
          .row(titulo="Ruido")
            p Este elemento no siempre hace parte de la comunicación asertiva, ya que puede denominarse como un error dentro de la comunicación, el cual no permite que se entregue el mensaje con claridad o también puede distorsionar la información transmitida.
          
          .row(titulo="Retroalimentación")
            p En esta se permite ejecutar una respuesta al mensaje transmitido por el emisor al receptor, de manera positiva o negativa, que no siempre debe incluir una respuesta y que también se deriva de la captación y la aceptación del mensaje, siendo útil para alguna actividad. En el campo turístico, el mensaje puede ser la información de un destino o mapeo de este, cuya retroalimentación se basa en el conocimiento adquirido acerca del destino, que sirve de utilidad para guiarse.

      .col-8.col-lg-4          
        figure
          img(src='@/assets/curso/temas/tema1/img16.svg', alt='') 

    separador

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.3  Errores de la comunicación

    .row.my-5
      p La comunicación es vital para el entendimiento de los seres humanos en cualquier campo de acción o ámbito de la vida, sin embargo, usualmente se incurre en algunos errores que dificultan su normal desarrollo. 
      p.mt-3 En el siguiente video se muestran los errores más comunes en los que se incurre al momento de comunicarnos.

    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.4  Técnicas y herramientas

    .row.justify-content-center.my-5
      .col-6.col-lg-2.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='').img-flotante        
      .col-lg-10
        p La comunicación es un proceso complejo mediante el cual se trata de diseñar o elaborar técnicas y herramientas que le permitan a las diferentes personas comunicarse entre sí, y cuya finalidad es ser desarrollada en los diferentes entornos sociales o comunicativos que permitan una relación intersocial adecuada para la concertación de diversos temas.
        p En el momento en que se habla de herramientas comunicativas, es necesario precisar que son usadas por todas las personas para su comunicación diaria, dependiendo de su motivación laboral o personal, bien sea a través de computadores, dispositivos móviles y aplicativos como:

    .row.my-5
      figure
        img(src='@/assets/curso/temas/tema1/img18.png', alt='')    

    .row.justify-content-center.my-5
      .col-lg-8
        p La comunicación es un proceso complejo mediante el cual se trata de diseñar o elaborar técnicas y herramientas que le permitan a las diferentes personas comunicarse entre sí, y cuya finalidad es ser desarrollada en los diferentes entornos sociales o comunicativos que permitan una relación intersocial adecuada para la concertación de diversos temas.

    .row.my-5
      p Dentro del campo comunicativo se encuentran diferentes herramientas que permiten una comunicación más concreta, a saber:

    .row.justify-content-center.texto-blanco.my-5
      .col-lg-5.my-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img19.svg", alt="alt")
          .crd_hover_txt--body
            h4.texto-negro.text-center.mb-3 Entrevista
            p.texto-negro.text-center.mb-0 La entrevista es una técnica comunicativa utilizada en todos los entornos, tiene como finalidad dar a conocer e identificar las características principales de un proyecto, persona o cosa, para obtener un beneficio en específico.

      .col-lg-5.my-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt")
          .crd_hover_txt--body
            h4.texto-negro.text-center.mb-3 Eventos, reuniones, asambleas, seminarios.
            p.texto-negro.text-center.mb-0 Todas estas técnicas abarcan la finalidad específica de reunir a un número de personas y brindarles información sobre cierto tema de interés, luego del cual se puede recibir su retroalimentación.

    separador

    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 1.5  Atención al cliente

    .row.my-5
      p La atención al cliente es catalogada como punto clave en el entorno turístico, de ella se generan experiencias y vivencias que profundizan en las acciones que toman los prestadores de servicio. 

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-3.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img21.svg')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-0 En la actualidad, las empresas buscan darle un enfoque directo al servicio al cliente priorizando al cliente externo, esto puede llegar a ocasionar conflictos dentro de la organización en caso de que no sea bien utilizado. Es importante tener en cuenta que el servicio o atención al cliente es una estrategia de marketing diseñada y desarrollada por diferentes empresas, la cual pretende una fidelización de clientes.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
