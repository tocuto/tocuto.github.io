<script>
  import Translation from "./Translation.svelte";
  import CFM from "./projects/CFM.svelte";
  import Chessagon from "./projects/Chessagon.svelte";
  import Parkour from "./projects/Parkour.svelte";
  import Plugins from "./projects/Plugins.svelte";
  import Transfromage from "./projects/Transfromage.svelte";
</script>

<Translation>
  <p slot="en">
    I am a self-taught backend engineer who loves tinkering with networks. My
    journey into software development started back in 2013, when I registered
    for Transformice: an online game that lets you code minigames (modules) with
    Lua. Driven by a curiosity to understand how technology works, I have honed
    my skills through independent learning, focusing on backend engineering.
    <br /><br />
    Over the years, I have become proficient in various programming languages and
    technologies, including Python, Rust, TypeScript, Docker, MySQL, PostgreSQL,
    etc.
    <br /><br />
    In addition to my career in software, I have recently graduated as a mechanical
    technician, achieving the highest average in my class. This technical education
    has provided me with a solid foundation in mechanical systems, and a unique perspective
    that complements my software engineering expertise.
    <br /><br />
    With a blend of software and mechanical skills, I am eager to contribute to projects
    that challenge me to think critically and develop robust, efficient solutions.
  </p>
  <p slot="es">
    Soy un ingeniero backend autodidacta que ama jugar con redes. Mi jornada en
    el desarrollo de software empieza en 2013, cuando me registré en
    Transformice: un juego online que te permite programar minijuegos (módulos)
    en Lua. Impulsado por la curiosidad para entender cómo funciona la
    tecnología, mejoré mis habilidades aprendiendo de manera independiente,
    enfocándome en la ingeniería de software backend.
    <br /><br />
    Con el pasar de los años, me he vuelto cualificado con varios lenguajes de programación
    y tecnología, incluyendo Python, Rust, TypeScript, Docker y bases de datos SQL.
    <br /><br />
    Además de mi carrera en software, recientemente me gradué como técnico mecánico,
    con el promedio más alto de la clase. Esta educación técnica me dio unos cimientos
    sólidos en sistemas mecánicos, y una perspectiva única que complementa mi experiencia
    como ingeniero de software.
    <br /><br />
    Con una combinación de habilidades de software y mecánicas, estoy ansioso por
    contribuir a proyectos que me desafíen a pensar de manera crítica y desarrollar
    soluciones eficientes y robustas.
  </p>
</Translation>

<div class="timeline">
  <CFM />
  <Chessagon />
  <Parkour />
  <Plugins />
  <Transfromage />
</div>

<style lang="scss">
  @use "bulma/sass/utilities/initial-variables" as iv;

  .timeline {
    position: relative;
    margin-top: 2rem;

    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    &:before {
      $bar: 2px;

      background-color: iv.$turquoise;
      content: " ";
      position: absolute;
      height: 100%;
      width: $bar;
      top: 0;
      left: calc(-1 * $bar / 2);
    }
  }
</style>
