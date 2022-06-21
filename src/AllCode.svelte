<script lang="ts">
  let a: number;
  let b: number;
  let c: number;
  const functionA = () => {
    a = 1;
  };
  const functionB = () => {
    functionA();
    b = a + 1;
  };
  const functionC = () => {
    functionB();
    c = b + 1;
  };
</script>

<h1>Hello Developer</h1>

{#if a}
  <div>A is {a}</div>
{/if}

{#if b}
  <div>B is {b}</div>
{/if}

{#if c}
  <div>C is {c}</div>
{/if}

<button on:click={functionC}>Call function c</button>

<style>
  div {
    background-color: blue;
    margin: 16px;
  }
</style>
