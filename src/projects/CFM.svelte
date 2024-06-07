<script lang="ts">
  import Project from "../Project.svelte";
  import Translation from "../Translation.svelte";
</script>

<Project github="https://github.com/cheeseformice">
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
    <p>
      This project was a statistics platform for Transformice. It's had many
      iterations, by different developers, and during 2021 - 2022, I took over.
    </p>
    <h4 class="subtitle is-size-5-touch is-size-4-desktop mb-1 mt-5">
      <b>Accessing the Data</b>
    </h4>
    <p>
      The game offers a read-only database containing all player statistics,
      which is updated daily and becomes unavailable for approximately one hour
      during this process. To ensure uninterrupted service during these updates,
      CFM implemented a full replication of this database.
      <br /><br />
      Database updates are arguably the most critical aspect of this project, as
      they facilitate the interface of additional data (such as player progression).
      Efficiently performing these updates is essential for maintaining high uptime
      for website users.
      <br /><br />
      On a daily basis, a docker container is run. This program initially pulls all
      rows' ID and CRC32 hash from both databases (8 bytes per row per database)
      and compares them. If they are identical, the row is ignored, otherwise, the
      updater retrieves the new row and marks it for further processing (e.g., ranking,
      player progression).
      <br /><br />
      Maintaining high performance during updates was crucial. While the updater
      was initially written in Python as a proof of concept, using PyPy proved to
      be sufficiently fast, and the entire update (including generating rankings)
      took about <b>14 minutes</b>. Most performance gains were achieved through
      the architecture of the updater itself, as it required minimal CPU
      resources: the most resource-intensive task was receiving, ordering and
      comparing two hash streams, with the rest primarily involving network
      operations and database processing. Additionally, non-continuous data
      processing allowed user requests to be queued and handled in between data
      batches.
    </p>
    <h4 class="subtitle is-size-5-touch is-size-4-desktop mb-1 mt-5">
      <b>Leaderboards</b>
    </h4>
    <p>
      Ranking 100 million players is a significant challenge. While using an
      index on a numeric column works, it introduces issues with pagination and
      determining a player's leaderboard position.
      <br /><br />
      Pagination on the first rows can be achieved using <code>LIMIT</code> and
      <code>OFFSET</code> in SQL, but becomes too slow when the offsets become
      too large, as it must count every single row before simply throwing it
      away. We faced the same problem when determining a player's leaderboard
      position: it's fast for top ranks but slow for middle to lower ranks.
      <br /><br />
      After researching solutions, I implemented the seek method, which fixed both
      our problems. The implementation involved a Redis instance storing every 40th
      row of all rankings (about 2.5 million entries) and maintaining a sorted array
      with just the stat values (about 11MB per leaderboard).
      <br /><br />
      This allows us to easily find the approximate stat value near a row: we just
      simply query Redis for the nearest row and index an array. To determine a player's
      position, we use their stat value and use binary search to find the closest
      row. These estimations allow us to tell the database approximately where to
      find our results, instead of scanning all rows.
    </p>
    <h4 class="subtitle is-size-5-touch is-size-4-desktop mb-1 mt-5">
      <b>Lessons Learned</b>
    </h4>
    <p>During this project, I gained valuable experience in several areas:</p>
    <ul style="margin-left: 1rem; list-style: auto;">
      <li>
        <b>Docker, Database and Linux Server Management</b>: As the sole
        engineer responsible maintaining project functionality, I learned how to
        manage these systems to ensure smooth operation.
      </li>
      <li>
        <b>Code Optimization</b>: Achieving the necessary performance required
        numerous optimizations, exemplified by the implementation of the seek
        method for the leaderboard.
      </li>
      <li>
        <b>Frontend Development</b>: Although a frontend engineer assisted me, I
        also had to contribute to frontend work, significantly enhancing my
        skills using TypeScript and Vue.
      </li>
    </ul>
  </div>
</Project>
