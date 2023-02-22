<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad y protocolos

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
          )
          .bloque-texto-g1__texto.p-3
            p.mb-0 Dentro de los requerimientos que tiene un turista cuando va a realizar su visita a un destino está la seguridad. Se entiende por seguridad turística todas aquellas acciones que tienen como finalidad la protección de la integridad y la vida de una persona. En el campo turístico, también se tiene en cuenta la salud física y mental de la persona que realiza su desplazamiento a un lugar distinto al de residencia. 

    .row.my-5
      p La seguridad turística también tiene como fundamento proteger y resguardar los aspectos económicos y políticos de una persona, teniendo en cuenta la diversidad cultural de cada usuario. El turismo involucra los diferentes aspectos de seguridad, la cual se otorga en los diferentes ambientes turísticos, algunos de estos son:

    .row.justify-content-center.my-5
      ImagenInfograficaB.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema4/img2.svg', alt='')

        div(x="9%" y="51%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5
              p Este sistema de seguridad es ofrecido por la policía pública o seguridad local, la cual se encarga de garantizar el libre desplazamiento del turista en un destino, evitando hurtos, extorsiones, asesinatos u incidentes con la población local o visitante del destino.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img3.svg', alt='')              

        div(x="28%" y="32%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5
              p Permite el libre desplazamiento del turista en un lugar en el cual puedan intervenir huelgas, manifestaciones y problemas sociales o políticos dentro de un territorio.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img4.svg', alt='')  

        div(x="47%" y="12%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5          
              p Sistema imprescindible en cualquier destino, ya que se encarga de garantizar la salud y vida de los visitantes en caso de una emergencia.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img5.svg', alt='')  

        div(x="65%" y="31%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5
              p Este le garantiza al visitante la protección de sus datos e información personal, además de brindar sistemas de comunicación seguros.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img6.svg', alt='')  

        div(x="85%" y="51%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5          
              p Previene y respalda riesgos relacionados con la actividad económica de algunos turistas.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img7.svg', alt='')  

        div(x="65%" y="71%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5         
              p La acción de este sistema se basa en la protección del entorno natural y cultural de un destino.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img8.svg', alt='')  

        div(x="47%" y="51%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5
              p Este sistema de seguridad garantiza la protección durante el desarrollo de cualquier evento, ya sea masivo o privado.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img9.svg', alt='')  

        div(x="28%" y="73%" tooltip="" numero="")
          .row.justify-content-center
            .col-lg-9.mt-5
              p Este sistema garantiza la protección de los turistas o visitantes en cualquier establecimiento prestador de servicios turísticos, como restaurantes, alojamientos y terminales de transporte.
            .col-4.col-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img10.svg', alt='')  

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-primario.p-4
          h3 Protocolos
          p Los protocolos son elementos que se deben tener en cuenta en todos los aspectos de seguridad. Estos involucran medidas y pasos a seguir teniendo en cuenta cada elemento mencionado anteriormente.
          p Los protocolos de seguridad deben ser desarrollados por cada uno de los gestores turísticos de los que dependa cada aspecto, es Los protocolos de seguridad deben ser desarrollados por cada uno de los gestores turísticos de los que dependa cada aspecto, es decir que cada aspecto de seguridad debe ejecutar sus protocolos relacionándolos con los turistas y con la población local de cada destino; deben contar con una estructura formativa de protocolos, los cuales han sido desarrollados por cada entidad con el fin de velar por la seguridad e integridad de la vida de las personas.

    .row.my-5
      p Para llevar a cabo los protocolos de seguridad es necesario:

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center.my-4(titulo="Paso 1")
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img11.svg', alt='')
            
            .col-lg-6
              p Coordinar las acciones relacionadas con el protocolo, utilizando las diferentes herramientas de comunicación para organizar los actores y los entornos.

          .row.justify-content-center.my-4(titulo="Paso 2")
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img12.svg', alt='')
            
            .col-lg-6
              p Preparar las acciones relacionadas con la coordinación de los protocolos, como capacitaciones y educación relacionada con el aspecto a desarrollar.

          .row.justify-content-center.my-4(titulo="Paso 3")
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img13.svg', alt='')
            
            .col-lg-6
              p Determinar las medidas de prevención que se llevarán a cabo en los aspectos de seguridad.

          .row.justify-content-center.my-4(titulo="Paso 4")
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img14.svg', alt='')
            
            .col-lg-6
              p Generar medidas de control de seguridad en las acciones de implementación, programas de implementación y estrategias de implementación.

          .row.justify-content-center.my-4(titulo="Paso 5")
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img15.svg', alt='')
            
            .col-lg-6
              p Crear medidas de mitigación en caso de accidentes o incidentes relacionados con el protocolo de seguridad.

          .row.justify-content-center.my-4(titulo="Paso 6")
            .col-8.col-lg-4
              figure
                img(src='@/assets/curso/temas/tema4/img16.svg', alt='')
            
            .col-lg-6
              p Identificar a los responsables que se harán cargo de realizar cada paso en los protocolos de seguridad.

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Estimado aprendiz, ha llegado al final de este componente formativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo. Para ello, diríjase al menú principal, donde encontrará la síntesis, la actividad didáctica, el material complementario, entre otros.







</template>

<script>
export default {
  name: 'Tema4',
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
