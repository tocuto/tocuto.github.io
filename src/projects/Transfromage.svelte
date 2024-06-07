<script lang="ts">
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/tocuto/transfromage">
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
    <p>
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
  </div>
</Project>
