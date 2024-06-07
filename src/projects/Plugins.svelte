<script lang="ts">
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/tocuto/tfmplugins">
  <span slot="title">TFM Plugins</span>
  <span slot="description">
    <Translation>
      <span slot="en">
        Extensible packet sniffer made to help write plugins for Transformice.
      </span>
      <span slot="es">
        Analizador de paquetes flexible para ayudar con la creación de plugins
        para Transformice.
      </span>
    </Translation>
  </span>

  <div slot="modal">
    <p>
      This was a small side project made in just 2 days. I had made it for
      personal use for reverse-engineering Transformice network packets, but
      quickly figured out that I could isolate the analyzer and publish it as an
      API for other people to use for their projects.
      <br /><br />
      Having built Transfromage before this project allowed me to start it quickly,
      as I could re-use most of the network code. The main challenge I faced was
      making the analyzer read sent and received packets, and understanding TCP.
      Using
      <a href="https://reqrypt.org/windivert.html" target="_blank">WinDivert</a>
      allowed me to have a proof of concept up and running really quickly.
      <br /><br />
      As far as I am aware, it has been used by several people who contacted me in
      private. Some of their projects involved receiving desktop notifications on
      certain game-events (like when receiving a private message) or even overlay
      visualizations.
      <br /><br />
      Overall, this project taught me how TCP works under the hood, and kickstarted
      my curiosity for networks.
    </p>
  </div>
</Project>
