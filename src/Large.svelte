<script lang="ts">
  const paths = [
    { label: "ad", slug: "ad" },
    { label: "adipiscing", slug: "adipiscing" },
    { label: "aliqua", slug: "aliqua" },
    { label: "aliquip", slug: "aliquip" },
    { label: "amet", slug: "amet" },
    { label: "anim", slug: "anim" },
    { label: "aute", slug: "aute" },
    { label: "cillum", slug: "cillum" },
    { label: "commodo", slug: "commodo" },
    { label: "consectetur", slug: "consectetur" },
    { label: "consequat", slug: "consequat" },
    { label: "culpa", slug: "culpa" },
    { label: "cupidatat", slug: "cupidatat" },
    { label: "deserunt", slug: "deserunt" },
    { label: "do", slug: "do" },
    { label: "dolor", slug: "dolor" },
    { label: "dolore", slug: "dolore" },
    { label: "duis", slug: "duis" },
    { label: "ea", slug: "ea" },
    { label: "eiusmod", slug: "eiusmod" },
    { label: "elit", slug: "elit" },
    { label: "enim", slug: "enim" },
    { label: "esse", slug: "esse" },
    { label: "est", slug: "est" },
    { label: "et", slug: "et" },
    { label: "eu", slug: "eu" },
    { label: "ex", slug: "ex" },
    { label: "excepteur", slug: "excepteur" },
    { label: "exercitation", slug: "exercitation" },
    { label: "fugiat", slug: "fugiat" },
    { label: "id", slug: "id" },
    { label: "in", slug: "in" },
    { label: "incididunt", slug: "incididunt" },
    { label: "ipsum", slug: "ipsum" },
    { label: "irure", slug: "irure" },
    { label: "labore", slug: "labore" },
    { label: "laboris", slug: "laboris" },
    { label: "laborum", slug: "laborum" },
    { label: "lorem", slug: "lorem" },
  ];
</script>

{#each paths as { label, slug }, index}
  <a class={`colour-${index % 4}`} href={slug}>{label} </a>
{/each}

<style>
  a {
    display: block;
  }
  .colour-0 {
    background-color: red;
  }
  .colour-1 {
    background-color: blue;
  }
  .colour-2 {
    background-color: green;
  }
  .colour-3 {
    background-color: grey;
  }
</style>
