<script lang="ts">
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/a801-luadev/parkour">
  <span slot="title">Parkour</span>
  <span slot="description">
    <Translation>
      <span slot="en">
        Most active Transformice minigame, with more than 50,000 monthly active
        players during my management.
      </span>
      <span slot="es">
        El minijuego más activo de Transformice, con más de 50.000 jugadores
        mensuales durante mi administración.
      </span>
    </Translation>
  </span>

  <div slot="modal">
    <Translation>
      <p slot="en">
        Although I did not initially develop this project, upon taking over, I
        meticulously managed every aspect, which resulted in breaking player
        activity records.
        <br />
        The project's initial state was functional, but had several potential improvements.
        Immediately after assuming control, I refactored the code to facilitate modularity
        and extend functionality more easily.
        <br /><br />
        At the time, I was experimenting with bots, proven by my project Transfromage.
        This experimentation allowed me to extend the minigame's functionality to
        other platforms, such as Discord. These bots later became integral to the
        minigame's infrastructure.
        <br /><br />
        This determination, combined with fortunate timing, contributed significantly
        to the project's success. Shortly after completing the refactor, the onset
        of the COVID-19 pandemic led to a resurgence of old Transformice players
        and an influx of new ones. The preparations I made enabled the minigame to
        accommodate this substantial increase in player activity.
        <br /><br />
        As the player base grew rapidly, I needed people to help me. I promptly established
        Content Curation, Moderation, and Translation teams, comprising over 60 amazing
        individuals who significantly contributed to the minigame's enhancement.
        Managing such a large group was initially challenging due to my lack of prior
        experience, but it became a rewarding learning experience over time.
        <br /><br />
        In addition to managing this team, I provided them with internal tools. The
        earlier decision to base the infrastructure on bots proved beneficial, as
        it made developing and operating these tools straightforward and efficient.
        <br /><br />
        An example of some of these tools were passive and active anti-cheat systems.
        While Transformice had existing similar protections, the growing player base
        also led to an increase in cheaters. The infrastructure I made enabled the
        development of new anti-cheat tools, from logging and analyzing player behavior
        to automatically banning obvious cheaters. Many of these anti-cheat systems
        were later adopted by the game administrators, due to the uniqueness and
        eficacy of my implementations.
        <br /><br />
        Over time, the infrastructure facilitated numerous in-game improvements,
        such as a record system where players could complete maps in the fastest
        time and have their records automatically verified and published.
        <br /><br />
        Overall, this was a really fun experience from which I was able to learn
        a lot:
      </p>
      <p slot="es">
        Aunque no fui el primer desarrollador de este proyecto, tras recibirlo,
        administré cada aspecto de manera meticulosa, lo que resultó en romper
        records de actividad de jugadores.
        <br />
        El estado inicial del proyecto era funcional, pero tenía varias mejoras potenciales.
        Inmediatamente tras tomar el control, reescribí el código para facilitar
        la modularidad y extender la funcionalidad.
        <br /><br />
        En aquel momento, estaba experimentando con bots, probado por mi proyecto
        Transfromage. Esta experimentación me permitió extender la funcionalidad
        del minijuego a otras plataformas, como Discord. Estos bots luego se volvieron
        el corazón de la infraestructura del minijuego.
        <br /><br />
        Esta determinación, combinada con un timing afortunado, contribuyó de manera
        significativa al éxito del proyecto. Poco después de completar las modificaciones
        al código, inició la pandemia de COVID-19, lo que dio un resurgimiento a
        jugadores de Transformice viejos y nuevos. Las preparaciones que hice le
        permitieron al minijuego manejar este incremento sustancial en actividad
        de jugadores.
        <br /><br />
        Como la cantidad de jugadores crecía de manera rápida, necesité personas
        que me ayudaran. Rápidamente creé equipos de Curación de Contenidos, Moderación
        y Traducción, incorporando a 60 individuos increíbles que contribuyeron de
        manera significativa a las mejoras del minijuego. Administrar un grupo tan
        grande fue desafiante al principio debido a mi falta de experiencia, pero
        se volvió una linda experiencia de aprendizaje con el tiempo.
        <br /><br />
        Además de administrar este equipo, les dí herramientas internas. La decisión
        temprana de crear una infraestructura basada en bots fue muy beneficiosa,
        ya que hizo que el desarrollo y la operación de estas herramientas fuera
        sencillo y eficiente.
        <br /><br />
        Un ejemplo de algunas de estas herramientas fueron sistemas anti trampas
        pasivos y activos. Aunque Transformice contaba con protecciones similares,
        los nuevos jugadores también trajeron un aumento en trampas. La infraestructura
        que hice permitió el desarrollo de nuevas herramientas anti-trampas, desde
        el registro y análisis de comportamiento de jugadores a la aplicación de
        sanciones automáticas para los cheaters obvios. Varios de estos sistemas
        fueron adoptados por los administradores del juego, debido a la eficacia
        de mis implementaciones.
        <br /><br />
        Con el pasar del tiempo, la infraestructura facilitó varias mejoras dentro
        del juego, como un sistema de records en el cual los jugadores podían completar
        mapas en el tiempo más rápido y tener sus récords verificados y publicados
        de manera automática.
        <br /><br />
        En general, fue una experiencia muy divertida de la cual pude aprender mucho:
      </p>
    </Translation>
    <ul style="margin-left: 1rem; list-style: auto;">
      <Translation>
        <li slot="en">
          <b>Code Optimization</b>: Due to the strict performance requirements
          in Transformice's API and huge playerbase, the minigame code had to be
          really efficient.
        </li>
        <li slot="es">
          <b>Optimización de Código</b>: Debido a los requisitos estrictos de
          rendimiento en la API de Transformice, y la enorme cantidad de
          jugadores, el minijuego tuvo que ser muy eficiente.
        </li>
      </Translation>
      <Translation>
        <li slot="en">
          <b>Server Management</b>: The infrastructure taught me a lot about how
          to operate linux servers in a secure and efficient manner.
        </li>
        <li slot="es">
          <b>Administración de Servidor</b>: La infraestructura me enseño mucho
          acerca de cómo operar servidores de linux en una manera segura y
          eficiente.
        </li>
      </Translation>
      <Translation>
        <li slot="en">
          <b>Coordinating People</b>: While all the 60+ volunteers were amazing
          and really helpful, coordinating people is no easy task, but this
          experience taught me a lot on how to properly handle these
          interactions.
        </li>
        <li slot="es">
          <b>Coordinar Personas</b>: Aunque todos los 60+ voluntarios fueron
          increibles y de mucha ayuda, coordinar personas no es una tarea
          sencilla, pero esta experience me enseñó mucho sobre cómo manejar
          estas interacciones de buena manera.
        </li>
      </Translation>
    </ul>
  </div>
</Project>
