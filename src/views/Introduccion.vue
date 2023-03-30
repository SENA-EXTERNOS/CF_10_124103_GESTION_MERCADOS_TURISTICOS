<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.my-5
      .col-10.col-lg-3.my-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='').img-flotante        
      .col-lg-9
        p Estimado aprendiz, a continuación, se precisarán los requerimientos del turista basados en sus necesidades y gustos, teniendo en cuenta que sus motivaciones y experiencias estén articuladas con las tendencias en turismo, las costumbres y la cultura de un lugar o atractivo. Con el desarrollo de la temática aprenderá a reconocer las características, los diversos perfiles de viajeros y los criterios que a su vez proporcionan su clasificación y segmentación, considerando sus intereses. De igual manera, profundizará sobre las técnicas de comunicación para una mejor interacción, evitando cometer errores y acudiendo al principio de atención al cliente, en coherencia con las herramientas, elementos de seguridad y protocolos que han de tenerse presentes al momento de gestionar productos turísticos, como parte de los requerimientos del turista o visitante.

    .row.my-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    .row.my-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/AECkGdxUun4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)









</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
