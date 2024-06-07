<script lang="ts">
  import Logo from "../assets/chessagon.png";
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/tocuto/chessagon" logo={Logo}>
  <span slot="title">Chessagon</span>
  <span slot="description">
    <Translation>
      <span slot="en">
        Play Hexagonal Chess in your browser, alone or with your friends online.
      </span>
      <span slot="es">
        Juega ajedrez hexagonal en tu navegador, solo o con tus amigos en línea.
      </span>
    </Translation>
  </span>

  <div slot="modal">
    <Translation>
      <p slot="en">
        This was a side project, inspired by a
        <a href="https://youtu.be/bgR3yESAEVE" target="_blank">CGP Grey video</a
        >, the main purpose was for me to learn how to target WebAssembly
        compilation and WebRTC connections using Rust, and while it was not the
        best decision (making the game purely in TypeScript would have made
        things less complicated), I did manage to improve my Rust skills.
        <br /><br />
        The biggest challenge I've faced was establishing a connection between two
        peers: since I wanted to keep this project in a free tier, I wasn't able
        to use WebSockets to connect two clients, or even help with exchanging ICE
        candidates. My solution was to periodically poll a Cloudflare worker which
        wrote to an R2 bucket to perform the signalling process of the WebRTC protocol.
        <br /><br />
        While I could have used an existing signalling server which met my requirements
        (like
        <a href="https://github.com/gfodor/p2pcf" target="_blank">p2pcf</a>), I
        decided to challenge myself to do it from scratch. The main problem I
        faced with this part of the process was avoiding race conditions: when
        both peers published a signal at the same time, one of the signals would
        get lost. I solved this by making each peer have their own signal queue,
        a pointer to the other peer's queue and a pointer to the last received
        signal. This way, a user could only write to their own queue, and only
        do read operations to the other queue, avoiding any possible race
        conditions.
        <br /><br />
        Overall, while a small project, it was fun to develop and learn how to integrate
        Rust into a web project (hint: I wouldn't recommend it unless there's a good
        reason behind it).
      </p>
      <p slot="es">
        Este proyecto fue inspirado por un
        <a href="https://youtu.be/bgR3yESAEVE" target="_blank"
          >video de CGP Grey</a
        >, y el propósito principal era para aprender cómo compilar para
        WebAssembly y usar conexiones de WebRTC utilizando Rust, y aunque no fue
        la mejor decisión (hacer el juego puramente en TypeScript habría hecho
        las cosas menos complicadas), mejoró mis habilidades de Rust.
        <br /><br />
        El desafío más grande fue establecer una conexión entre dos pares: debido
        a que quise mantener el proyecto en el nivel gratuito, no podía utilizar
        WebSockets para conectar dos jugadores, o incluso para ayudar a intercambiar
        candidatos ICE. Mi solución fue periódicamente mandarle una pentición a un
        Worker de Cloudflare el cual escribía a una base de datos R2 para realizar
        el proceso inicial para intercambiar datos del protocolo WebRTC.
        <br /><br />
        Aunque pude haber utilizado un servidor ya escrito que cumplía con mis requisitos
        (como
        <a href="https://github.com/gfodor/p2pcf" target="_blank">p2pcf</a>),
        decidí desafiarme a hacerlo desde cero. El problema principal de esta
        parte del proceso, fue evitar las condiciones de carrera: cuando ambos
        pares publicaban una señal al mismo tiempo, una de las señales se
        perdía. Lo resolví haciendo que cada par tenga su propia cola de
        señales, un pointer a la cola de datos de su par, y un pointer a la
        última señal recibida. De esta forma, un usuario sólamente puede
        escribir a su propia cola de datos, y solo hacer operaciones de lectura
        en la otra cola, evitando cualquier posible condición de carrera.
        <br /><br />
        En general, aunque fue un proyecto pequeño, fue divertido desarrollarlo y
        aprender cómo integrar Rust en un proyecto web (pista: no lo recomendaría
        a no ser que haya una buena razón detrás de esa decisión).
      </p>
    </Translation>
  </div>
</Project>
