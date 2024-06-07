<script lang="ts">
  import Logo from "../assets/cfm.png";
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/cheeseformice" logo={Logo}>
  <span slot="title">CheeseForMice</span>
  <span slot="description">
    <Translation>
      <span slot="en">
        Statistics platform ranking over 100 million Transformice players.
      </span>
      <span slot="es">
        Plataforma de estadísticas con un ranking de más de 100 millones de
        jugadores de Transformice.
      </span>
    </Translation>
  </span>

  <div slot="modal">
    <Translation>
      <p slot="en">
        This project was a statistics platform for Transformice. It's had many
        versions, by different developers, and during 2021 - 2022, I took over.
      </p>
      <p slot="es">
        Este proyecto fue una plataforma de estadísticas para Transformice. Tuvo
        varias versiones, por distintos desarrolladores, y durante 2021 - 2022,
        lo mantuve yo.
      </p>
    </Translation>
    <h4 class="subtitle is-size-5-touch is-size-4-desktop mb-1 mt-5">
      <Translation>
        <b slot="en">Accessing the Data</b>
        <b slot="es">Leyendo los Datos</b>
      </Translation>
    </h4>
    <Translation>
      <p slot="en">
        The game offers a read-only database containing all player statistics,
        which is updated daily and becomes unavailable for approximately one
        hour during this process. To ensure uninterrupted service during these
        updates, CFM implemented a full replication of this database.
        <br /><br />
        Database updates are arguably the most critical aspect of this project, as
        they facilitate the interface of additional data (such as player progression).
        Efficiently performing these updates is essential for maintaining high uptime
        for website users.
        <br /><br />
        On a daily basis, a docker container is run. This program initially pulls
        all rows' ID and CRC32 hash from both databases (8 bytes per row per database)
        and compares them. If they are identical, the row is ignored, otherwise,
        the updater retrieves the new row and marks it for further processing (e.g.,
        ranking, player progression).
        <br /><br />
        Maintaining high performance during updates was crucial. While the updater
        was initially written in Python as a proof of concept, using PyPy proved
        to be sufficiently fast, and the entire update (including generating rankings)
        took about <b>14 minutes</b>. Most performance gains were achieved
        through the architecture of the updater itself, as it required minimal
        CPU resources: the most resource-intensive task was receiving, ordering
        and comparing two hash streams, with the rest primarily involving
        network operations and database processing. Additionally, non-continuous
        data processing allowed user requests to be queued and handled in
        between data batches.
      </p>
      <p slot="es">
        El juego ofrece una base de datos de solo lectura con los datos de todos
        los jugadores, la cual se actualiza todos los días y se apaga mientras
        se completa este proceso, el cual tarda aproximadamente una hora. Para
        mantener un servicio ininterrumptido durante las actualizaciones, CFM
        replicaba la base de datos entera.
        <br /><br />
        Las actualizaciones de la base de datos son posiblemente el aspecto más crítico
        del proyecto, ya que facilitan la interfaz de datos adicionales (como el
        progreso de jugadores). Actualizarla de forma eficiente es esencial para
        mantener una alta accesibilidad para los usuarios del sitio web.
        <br /><br />
        De manera diaria, se inicia un contenedor de Docker. El programa primero
        obtiene todas las ID y hash CRC32 de las filas de ambas bases de datos (8
        bytes por fila por base de datos) y los compara. Si son idénticos, la fila
        es ignorada, de otro modo, el actualizador obtiene la fila nueva y la marca
        para ser procesada (por ejemplo, ranking, progreso de jugadores).
        <br /><br />
        Mantener un buen rendimiento durante las actualizaciones es muy importante.
        Aunque el actualizador fue escrito en Python como una prueba de concepto,
        el usar PyPy fue lo suficientemente rápido, y una actualización entera (incluyendo
        la generación de rankings) tomaba cerca de <b>14 minutos</b>. Esta
        velocidad se obtuvo debido a la arquitectura del actualizador, ya que
        requiere recursos mínimos de CPU: la tarea más pesada era recibir,
        ordenar y comparar dos streams de hashes, con el resto de tareas
        dependiendo más que nada en operaciones de red y procesamiento de base
        de datos. Además, el procesar los datos de manera interrumpida (en
        lotes), permitió que las peticiones de los usuarios se resolvieran entre
        lote y lote.
      </p>
    </Translation>
    <h4 class="subtitle is-size-5-touch is-size-4-desktop mb-1 mt-5">
      <Translation>
        <b slot="en">Leaderboards</b>
        <b slot="es">Ranking</b>
      </Translation>
    </h4>
    <Translation>
      <p slot="en">
        Ranking 100 million players is a significant challenge. While using an
        index on a numeric column works, it introduces issues with pagination
        and determining a player's leaderboard position.
        <br /><br />
        Pagination on the first rows can be achieved using <code>LIMIT</code>
        and <code>OFFSET</code> in SQL, but becomes too slow when the offsets
        become too large, as it must count every single row before simply
        throwing it away. We faced the same problem when determining a player's
        leaderboard position: it's fast for top ranks but slow for middle to
        lower ranks.
        <br /><br />
        After researching solutions, I implemented the
        <a
          href="https://blog.jooq.org/faster-sql-paging-with-jooq-using-the-seek-method/"
          target="_blank">seek method</a
        >, which fixed both our problems. The implementation involved a Redis
        instance storing every 40th row of all rankings (about 2.5 million
        entries) and maintaining a sorted array with just the stat values (about
        11MB per leaderboard).
        <br /><br />
        This allows us to easily find the approximate stat value near a row: we just
        simply query Redis for the nearest row and index an array. To determine a
        player's position, we use their stat value and use binary search to find
        the closest row. These estimations allow us to tell the database approximately
        where to find our results, instead of scanning all rows.
      </p>
      <p slot="es">
        Generar un ranking de 100 millones de jugadores no es una tarea fácil.
        Si bien usar un índice sobre una columna numérica funcionaría, introduce
        problemas con la paginación y al determinar la posición de un jugador.
        <br /><br />
        La paginación en las primeras filas se puede realizar utilizando
        <code>LIMIT</code> y <code>OFFSET</code> en SQL, pero se vuelve muy
        lento cuando el offset es muy grande, ya que se tiene que contar cada
        fila y luego simplemente tirarla. El mismo problema aparece cuando se
        quiere determinar la posición de un jugador: es rápido para las
        posiciones altas, pero lento para las posiciones del medio y las bajas.
        <br /><br />
        Luego de investigar posibles soluciones, implementé el
        <a
          href="https://blog.jooq.org/faster-sql-paging-with-jooq-using-the-seek-method/"
          target="_blank">método "seek"</a
        >, y solucionó ambos problemas. La implementación requiere una instancia
        de Redis guardando las estadísticas de cada ranking (por ejemplo, rondas
        jugadas) cada 40 filas (es decir, es un array ordenado que contiene el
        ranking entero, saltando de 40 filas en 40 filas). Esto nos da cerca de
        2,5 millones de entradas, y cerca de 11MB por ranking.
        <br /><br />
        Esto nos permite encontrar un valor aproximado de cualquier fila: simplemente
        le pedimos a Redis que acceda al valor de la fila más cercana a la que queremos.
        Para determinar la posición de un jugador, usamos el valor de su estadística,
        y usamos búsqueda binaria en el array para obtener el índice de la fila más
        cercana. Estas estimaciones nos permiten decirle a la base de datos aproximadamente
        dónde buscar nuestros resultados, en vez de escanear todas las filas.
      </p>
    </Translation>
    <h4 class="subtitle is-size-5-touch is-size-4-desktop mb-1 mt-5">
      <Translation>
        <b slot="en">Lessons Learned</b>
        <b slot="es">¿Qué aprendí?</b>
      </Translation>
    </h4>
    <Translation>
      <p slot="en">
        During this project, I gained valuable experience in several areas:
      </p>
      <p slot="es">
        Durante este proyecto, obtuve experiencias importantes en varias áreas:
      </p>
    </Translation>
    <ul style="margin-left: 1rem; list-style: auto;">
      <Translation>
        <li slot="en">
          <b>Docker, Database and Linux Server Management</b>: As the sole
          engineer responsible maintaining project functionality, I learned how
          to manage these systems to ensure smooth operation.
        </li>
        <li slot="es">
          <b>Administración de Docker, Bases de Datos y Servidores Linux</b>:
          Como el único ingeniero responsable de mantener el proyecto, aprendí a
          cómo administrar estos sistemas para mantener un buen funcionamiento.
        </li>
      </Translation>
      <Translation>
        <li slot="en">
          <b>Code Optimization</b>: Achieving the necessary performance required
          numerous optimizations, exemplified by the implementation of the seek
          method for the leaderboard.
        </li>
        <li slot="es">
          <b>Optimización de Código</b>: Obtener el rendimiento necesario
          requirió de varias optimizaciones, ejemplificadas en la implementación
          del método "seek" para el ranking.
        </li>
      </Translation>
      <Translation>
        <li slot="en">
          <b>Frontend Development</b>: Although a frontend engineer assisted me,
          I also had to contribute to frontend work, significantly enhancing my
          skills using TypeScript and Vue.
        </li>
        <li slot="es">
          <b>Desarrollo Frontend</b>: Aunque hubo un ingeniero frontend que me
          asistió, también tuve que realizar contribuciones al frontend,
          mejorando mis habilidades en TypeScript y Vue de manera significativa.
        </li>
      </Translation>
    </ul>
  </div>
</Project>
