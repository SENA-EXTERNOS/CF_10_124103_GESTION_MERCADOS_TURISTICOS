<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Viajero

    .row.justify-content-center.my-5
      .col-lg-10
        p En el turismo se encuentran terminologías asociadas y entrelazadas con diferentes nombres, pero que pueden abarcar significados similares. Un ejemplo son los términos ‘turista’, ‘viajero’ y ‘visitante’, pues pueden contener o relacionar acciones similares, pero su significado varía dependiendo del contexto en el que se encuentre.      

    .row.justify-content-center.my-5
      .col-lg-8
        p Según la #[strong OMT] (2008)
          .bloque-texto-b.color-bloque-texto.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left.color-vineta
              p “Un viajero es toda persona que se desplaza entre dos lugares geográficos distintos por cualquier motivo y duración”. (párr. 2).
              i.fas.fa-quote-right.color-vineta

    separador

    #t_3_1    
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.1 Tipologías

    .row.justify-content-center.my-5
      .col-8.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='').img-flotante      
      .col-lg-9
        p Las tipologías del viajero varían dependiendo de las actividades que deseen realizar durante su viaje. También van ligadas, desde un inicio, a la motivación que los impulse a visitar un destino.
        p Cada persona varía sus preferencias al momento de viajar, ya sea por una profesión en específico o por un pasatiempo que quiera realizar; dependiendo de esto planean y realizan su viaje. Durante años se han venido forjando tipologías de viajeros específicas, que facilitan la categorización del planificador turístico a la hora de ofrecer un producto. Algunas tipologías de viajeros son:

    .row.my-5
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Tipologías de los viajeros

    .row.justify-content-center.my-5
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img2.png', alt='')

          .tarjeta.ubicacion1.color-acento-botones.p-3(x="17%" y="98%" numero="")
            h4 Viajero cultural:
            p Este se centra en la visita de centros culturales, obras de arte y nuevas culturas o tradiciones.

          .tarjeta.ubicacion2.color-acento-botones.p-3(x="50%" y="98%" numero="")
            h4 Viajero aventurero:
            p Este viajero centra la razón de su viaje en nuevas aventuras de diferentes tipos. Siempre busca nuevos pasatiempos y atractivos que generen libertad y adrenalina.

          .tarjeta.ubicacion3.color-acento-botones.p-3(x="83%" y="98%" numero="")
            h4 El viajero #[i foodie:]
            p Este tipo de viajero, como su nombre lo indica, realiza sus viajes para experimentar y probar nuevos sabores, su principio fundamental se basa en viajar para probar comida.

    separador

    #t_3_2 
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.2 Criterios de clasificación 

    .row.my-5
      p Los criterios para clasificar a los viajeros son necesarios para distinguir sus objetivos, y de allí partir a la clasificación de estos. Se pueden clasificar así:

    .row.my-3
      ul.lista-ul--color
        li 
          i.fas.fa-square.color-vineta
          h4 Criterios de clasificación de viajeros

    .row.justify-content-center.my-3
      TabsA.color-acento-contenido
        .tarjeta.tarjeta--rosa.p-5(titulo="Dependiendo de su actividad")
          .row.justify-content-center
            .col-5.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img3.svg', alt='')    

            .col-lg-10
              p En este caso, las personas que realizan un viaje lo hacen con base en una necesidad relacionada con su actividad recreativa, laboral y emocional.

        .tarjeta.tarjeta--rosa.p-5(titulo="Dependiendo de su estilo de vida")
          .row.justify-content-center
            .col-7.col-lg-2.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img4.svg', alt='')             

            .col-lg-10
              p En este caso, las personas que realizan un viaje lo hacen para seguir un estilo de vida. Las personas de esta clasificación tienen un prototipo de vida que cumple con estándares de calidad, el cual deben seguir a la hora de realizar un viaje, independientemente de cuál sea su destino.

    separador

    #t_3_3 
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.3 Perfiles del viajero

    .row.justify-content-center.my-5
      .col-8.col-lg-2.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='').img-flotante      
      .col-lg-8
        p Los perfiles del viajero están relacionados con las posturas que toma una persona a la hora de realizar su viaje. Estos lineamientos dependen tanto de la clasificación de la persona que va a viajar como también de las tipologías turísticas que influyen en la manera de ver el destino.

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img6.svg')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-0 Teniendo en cuenta lo mencionado anteriormente, se puede deducir el perfil de viajero mediante herramientas informativas, las cuales consultan datos de valor, como la locación donde reside y a dónde viaja frecuentemente, la estancia que puede durar o pernoctar en el destino, el tipo de alojamiento que incluye en la mayoría de sus viajes, la intención del viaje y los motivos o atributos a la hora de tomar la decisión de viaje.

    .titulo-sexto.color-acento-contenido.my-5
      h5 Tabla 1.
      span Perfiles de viajeros

    .tabla-a.color-acento-contenido 
      table
        thead
          tr
            th Localización
            th Estancia
            th Tipo de  alojamiento
            th Intención de viaje
            th Motivación de la decisión
            th Gustos y preferencias 
            th Perfil viajero

        tbody
          tr
            td Centro de negocios/ zonas residenciales.
            td 1-2 semanas 
            td Alojamiento 5 estrellas con oportunidad de sala de juntas.
            td Realizar proyectos y negocios en el entorno laboral y comercial.
            td Fijar negocios en destinos estratégicos ideales para invertir.
            td Realizar inversiones de buen capital para aumentar la producción de la empresa.
            td Viajero comercial o viajero de negocios.
          tr
            td Zona litoral / lugares cerca a la playa.
            td 1 semana
            td Alojamiento en zona residencial.
            td Vacaciones.
            td Acumulación de estrés, oportunidad de vacaciones.
            td Divertirse al máximo en nuevos lugares.
            td Viajero recreacional.
  
    separador

    #t_3_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.4 Técnicas de definición del interés del turista

    .row.justify-content-center.my-5
      .col-8.col-lg-3.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='').img-flotante      
      .col-lg-7
        p Para determinar o lograr definir el interés de un viajero es necesario realizar un filtro mediante las diferentes herramientas de comunicación, estas son de gran utilidad para investigar o definir el interés de un viajero al momento de frecuentar un destino. Por lo general, son elaboradas por expertos de la mercadotecnia y se llevan a cabo en los destinos turísticos más frecuentados, en diferentes lugares como aeropuertos, hoteles o restaurantes.
        p  Algunas técnicas para definir el interés del turista son:


    .row.justify-content-center.my-5
      .col-lg-8
        ul.lista-ul--color.lista-ul--separador
          li 
            i
            | Caracterizar o segmentar los visitantes por nacionalidad, edad y género.
          li 
            i
            | Definir una fecha para la toma de datos, ya que el interés del turista puede variar dependiendo la estacionalidad.
          li 
            i
            |Determinar el perfil del viajero y el tiempo de estancia en el destino. 
          li 
            i
            | Analizar aspectos como concurrencia y fidelización del destino en el que esté identificado el interés del turista.
          li 
            i
            | Identificar el número de personas que viajan al destino.
          li 
            i
            | Tener en cuenta la permanencia en el lugar.
          li 
            i
            | Determinar los gustos e intereses dependiendo servicios turísticos y atractivos.

    separador

    #t_3_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-up-right")
      h2 3.5 Orientación y atención 

    .row.my-5
      p La orientación turística o la orientación al viajero tiene gran importancia en el sector turístico, ya que no solo se trata de vender o promocionar atractivos o destinos turísticos, también los prestadores de servicios y colaboradores tienen la obligación de disponer sus conocimientos y guías culturales a los visitantes del destino. Adicionalmente, se encuentran la obligación de realizar estudios comportamentales de culturas diferentes al destino y los impactos que pueden generar en la población nativa.

    .row.justify-content-center.my-5
      .col-6.col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p La orientación turística se encarga de la sensibilización del visitante al momento de ingresar a un lugar, añadiéndole un valor agregado, el cual no afecte el entorno cultural o natural donde se encuentre. Puede ser necesario diseñar un instructivo que sirva como herramienta de atención y prevención en los lugares visitados; además de esto, se debe brindar un mapa con las recomendaciones necesarias que se deben tener en cuenta en el lugar visitado.

        .bloque-texto-b1.color-secundario.p-4
          .bloque-texto-b__texto
            p La atención al visitante también se basa en el conocimiento de este, es decir, en brindar servicios afines a sus gustos y motivaciones, incluir al cliente información veraz acerca del destino, teniéndolo en cuenta como una persona importante y diferente a los demás usuarios. Para orientar al turista y brindarle una buena atención es indispensable manejar una estructura, teniendo en cuenta la finalidad de su viaje.



</template>

<script>
export default {
  name: 'Tema3',
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
