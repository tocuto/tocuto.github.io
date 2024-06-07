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
    <p>
      Although I did not initially develop this project, upon taking over, I
      meticulously managed every aspect, which resulted in breaking player
      activity records.
      <br />
      The project's initial state was functional, but had several potential improvements.
      Immediately after assuming control, I refactored the code to facilitate modularity
      and extend functionality more easily.
      <br /><br />
      At the time, I was experimenting with bots, proven by my project Transfromage.
      This experimentation allowed me to extend the minigame's functionality to other
      platforms, such as Discord. These bots later became integral to the minigame's
      infrastructure.
      <br /><br />
      This determination, combined with fortunate timing, contributed significantly
      to the project's success. Shortly after completing the refactor, the onset
      of the COVID-19 pandemic led to a resurgence of old Transformice players and
      an influx of new ones. The preparations I made enabled the minigame to accommodate
      this substantial increase in player activity.
      <br /><br />
      As the player base grew rapidly, I needed people to help me. I promptly established
      Content Curation, Moderation, and Translation teams, comprising over 60 amazing
      individuals who significantly contributed to the minigame's enhancement. Managing
      such a large group was initially challenging due to my lack of prior experience,
      but it became a rewarding learning experience over time.
      <br /><br />
      In addition to managing this team, I provided them with internal tools. The
      earlier decision to base the infrastructure on bots proved beneficial, as it
      made developing and operating these tools straightforward and efficient.
      <br /><br />
      An example of some of these tools were passive and active anti-cheat systems.
      While Transformice had existing protections, the growing player base also led
      to an increase in cheaters. The infrastructure I made enabled the development
      of new anti-cheat tools, from logging and analyzing player behavior to automatically
      banning obvious cheaters. Many of these anti-cheat systems were later adopted
      by the game administrators, due to the uniqueness of my implementations.
      <br /><br />
      Over time, the infrastructure facilitated numerous in-game improvements, such
      as a record system where players could complete maps in the fastest time and
      have their records automatically verified and published.
      <br /><br />
      Overall, this was a really fun experience from which I was able to learn a
      lot:
    </p>
    <ul style="margin-left: 1rem; list-style: auto;">
      <li>
        <b>Code Optimization</b>: Due to the strict performance requirements in
        Transformice's API and huge playerbase, the minigame code had to be
        really efficient.
      </li>
      <li>
        <b>Server Management</b>: The infrastructure taught me a lot about how
        to operate linux servers in a secure and efficient manner.
      </li>
      <li>
        <b>Coordinating People</b>: While all the 60+ volunteers were amazing
        and really helpful, coordinating people is no easy task, but this
        experience taught me a lot on how to properly handle these interactions.
      </li>
    </ul>
  </div>
</Project>
