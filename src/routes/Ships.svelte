<script>
    import Page from "layout/Page.svelte";
    import { getShips } from 'api/index.js';

</script>

<style type="text/scss">
    %ships-list--styles {
        padding: 3rem 1rem;
    }
    %ship-item--styles {
        box-shadow: 0 0 4px 2px var(--highlight-01);
        z-index: 1001;
        > header {
            --font-size: 1.5rem;
            --font-weight: 300;
            background: var(--dark-02);
            padding: 0.5rem 1rem;
            margin: 4px;
            text-align: center;
        }
        > img {
            width: 100%;
        }
    }
    %ships-list--layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
    %ship-item--layout {
        display: grid;
        grid-template-rows: [ship-name] max-content [ship-img] 1fr;
        justify-content: center;
    }

    .ships-list {
        @extend %ships-list--layout;
        @extend %ships-list--styles;
        > .ship-item {
            @extend %ship-item--layout;
            @extend %ship-item--styles;
        }
    }
</style>

<Page 
    pageTitle="Ships Silo" 
    pageDescription="A display of all the ships in the Star Wars Universe."
>
    <section class="ships-list">
        {#each $getShips as { id, name } }
            <article class="ship-item">
                <header class="ship-item--title">{name}</header>
                <img src={`assets/ships/${id}.png`} alt={name}>
            </article>
        {/each}
    </section>
</Page>