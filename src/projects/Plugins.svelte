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
    <Translation>
      <p slot="en">
        This was a small side project made in just 2 days. I had made it for
        personal use for reverse-engineering Transformice network packets, but
        quickly figured out that I could isolate the analyzer and publish it as
        an API for other people to use for their projects.
        <br /><br />
        Having built Transfromage before this project allowed me to start it quickly,
        as I could re-use most of the network code. The main challenge I faced was
        making the analyzer read sent and received packets, and understanding TCP.
        Using
        <a href="https://reqrypt.org/windivert.html" target="_blank"
          >WinDivert</a
        >
        allowed me to have a proof of concept up and running really quickly.
        <br /><br />
        As far as I am aware, it has been used by several people who contacted me
        in private. Some of their projects involved receiving desktop notifications
        on certain game events (like when receiving a private message) or even overlay
        visualizations.
        <br /><br />
        Overall, this project taught me how TCP works under the hood, and kickstarted
        my curiosity for networks.
      </p>
      <p slot="es">
        Este fue un proyecto pequeño que hice en 2 días. Al principio lo hice
        para uso personal para poder analizar paquetes de la red de
        Transformice, pero rápidamente me di cuenta que podría isolar el
        analizador y publicarlo como una API para que otras personas puedan
        utilizarlo en sus proyectos.
        <br /><br />
        El haber hecho Transfromage antes de este proyecto me permitió empezarlo
        de manera rápida, ya que pude reutilizar la mayoría del código de red. El
        desafío principal fue hacer que el analizador lea paquetes enviados y recibidos,
        y entender TCP. Utilizar
        <a href="https://reqrypt.org/windivert.html" target="_blank"
          >WinDivert</a
        >
        me apermitió tener una prueba de concepto hecha muy rápido.
        <br /><br />
        Hasta donde tengo entendo, fue utilizado por varias personas que me contactaron
        en privado. Algunos de sus proyectos involucraban recibir notificaciones
        en el escritorio tras ciertos eventos del juego (como al recibir un mensaje
        privado) o incluso visualizaciones sobrepuestas (de overlay).
        <br /><br />
        En general, el proyecto me enseñó como funciona TCP internamente, e inició
        mi curiosidad por redes.
      </p>
    </Translation>
  </div>
</Project>
