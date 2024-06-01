<script>
  import CFM from "./projects/CFM.svelte";
  import Chessagon from "./projects/Chessagon.svelte";
  import Parkour from "./projects/Parkour.svelte";
  import Plugins from "./projects/Plugins.svelte";
  import Transfromage from "./projects/Transfromage.svelte";
</script>

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa
duis.

<div class="timeline">
  <CFM />
  <Chessagon />
  <Parkour />
  <Plugins />
  <Transfromage />
</div>

<style lang="scss">
  @use "bulma/sass/utilities/initial-variables" as iv;

  .timeline {
    position: relative;
    margin-top: 2rem;

    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    &:before {
      $bar: 2px;

      background-color: iv.$turquoise;
      content: " ";
      position: absolute;
      height: 100%;
      width: $bar;
      top: 0;
      left: calc(-1 * $bar / 2);
    }
  }
</style>
