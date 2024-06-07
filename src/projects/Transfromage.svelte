<script lang="ts">
  import Logo from "../assets/transfromage.webp";
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/tocuto/transfromage" logo={Logo}>
  <span slot="title">Transfromage</span>
  <span slot="description">
    <Translation>
      <span slot="en">
        Bots API to help other developers extend Transformice functionality.
      </span>
      <span slot="es">
        API de bots para ayudar a otros desarrolladores a extender funcionalidad
        de Transformice.
      </span>
    </Translation>
  </span>

  <div slot="modal">
    <Translation>
      <p slot="en">
        Transfromage was the first version for an API for Transformice, enabling
        developers to connect bot players to the game and interact with it.
        Rapidly enhanced by the developer community, it evolved into several
        libraries, written in
        <a href="https://github.com/Athesdrake/aiotfm" target="_blank">
          Python (aiotfm)</a
        >,
        <a
          href="https://github.com/Lautenschlager-id/transfromage"
          target="_blank"
        >
          Lua
        </a>
        and
        <a
          href="https://github.com/cheeseformice/transformice.js"
          target="_blank"
        >
          JavaScript</a
        >.
        <br /><br />
        The primary challenge I encountered during this project was the absence of
        documentation and resources. This required me to reverse engineer the game
        code and network packets. Although frustrating at first, this process proved
        to be an enjoyable and educational experience.
        <br /><br />
        Publishing such an API presented the risk of misuse (like spambots). Fortunately,
        the game had security measures, primarily encryption, to prevent unauthorized
        access.
        <br />
        For the first API versions, we automated the process of extracting the encryption
        keys, and provided access via an HTTP endpoint under a whitelist restriction.
        Developers were granted access after completing a form to verify their intentions,
        with the ability to revoke access for any rule violations.
        <br /><br />
        After several iterations, we were able to get approval from the game administrators
        to utilize an encryption free protocol for pre-approved bot accounts. This
        significantly enhanced security against malicios actors by simply not supporting
        newer encryption versions in our API anymore.
        <br /><br />
        This API allowed numerous developers to create their own projects, including
        game moderation bots.
      </p>
      <p slot="es">
        Transfromage fue la primer versión de una API para Transformice,
        permitiéndole a desarolladores conectar jugadores bot e interactuar con
        el juego. Fue rápidamente mejorado por la comunidad de desarrolladores,
        y evolucionó en varias librerías, escritas en
        <a href="https://github.com/Athesdrake/aiotfm" target="_blank">
          Python (aiotfm)</a
        >,
        <a
          href="https://github.com/Lautenschlager-id/transfromage"
          target="_blank"
        >
          Lua
        </a>
        y
        <a
          href="https://github.com/cheeseformice/transformice.js"
          target="_blank"
        >
          JavaScript</a
        >.
        <br /><br />
        El desafío principal que me encontré durante el proyecto fue la ausencia
        de documentación y recursos. Esto me requirió hacer ingeniería inversa del
        código del juego y sus paquetes de red. Aunque fue frustrante al principio,
        terminé disfrutando del proceso y aprendiendo mucho.
        <br /><br />
        Publicar una API como esta presentaba el riesgo del mal uso (como spambots).
        Afortunadamente, el juego tenía medidas de seguridad, principalmente encriptación,
        para prevenir el acceso sin autorización.
        <br />
        En la primer versión de la API, automatizamos el proceso de extraer las claves
        de encriptación y publicamos el acceso a través de un endpoint HTTP, con
        una restricción de whitelist. Los desarrolladores obtenían acceso tras completar
        un formulario para verificar sus intenciones, con la habilidad de quitarles
        dicho acceso tras romper cualquier regla.
        <br /><br />
        Luego de varias iteraciones, obtuvimos la aprobación de los administradores
        del juego para utilizar un protocolo sin encriptación, dado que las cuentas
        fueran pre-aprobadas. Esto mejoró la seguridad contra personas con malas
        intenciones debido a que simplemente no soportaríamos las nuevas encriptaciones
        en nuestra API.
        <br /><br />
        Esta API le permitió a varios desarrolladores crear sus propios proyectos,
        incluyendo bots de moderación del juego.
      </p>
    </Translation>
  </div>
</Project>
