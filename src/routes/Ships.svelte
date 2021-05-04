<script>
    import Page from "layout/Page.svelte";
    import { getShips } from 'api/index.js';

</script>

<style>
    /* your styles go here */
</style>

<Page 
    pageTitle="Ships Silo" 
    pageDescription="A display of all the ships in the Star Wars Universe."
>
    <section class="characters-list">
        {#each $getShips as ships}
            <article></article>
        {/each}
    </section>
</Page>