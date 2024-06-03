<script lang="ts">
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/cheeseformice">
  <div slot="modal"></div>
  <span slot="title">CheeseForMice</span>
  <span slot="description">
    <Translation>
      <p slot="en">
        Statistics platform ranking over 100 million Transformice players.
      </p>
      <p slot="es">
        Plataforma de estadísticas con un ranking de más de 100 millones de
        jugadores de Transformice.
      </p>
    </Translation>
  </span>
</Project>
