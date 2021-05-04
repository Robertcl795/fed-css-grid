<script>
    import Page from "layout/Page.svelte";
    
    import { getCharacters } from 'api/index.js';

</script>

<style type="text/scss">
    %characters-list--styles {
        padding: 2rem 1rem;
    }
    %character-item--styles {
        --character-content--padding: 0 1.5rem;
        background: hsl(0, 0%, 10%);
        border-radius: 1rem;
        border: 1px solid grey;
        box-shadow: 0 0 4px 2px var(--highlight-01);
        max-width: 20rem;
        min-width: 15rem;
        opacity: 1;
        overflow: hidden;
        padding-bottom: 1rem;
        position: relative;
        width: 100%;
        z-index: 1000;
        img {
            filter: brightness(70%);
            height: 100%;
            max-height: 18rem;
            width: 100%;
        }
        .character-item--name {
            --font-size: 2rem;
            --font-weight: 300;
            padding: var(--character-content--padding);
            z-index: 1001;
        }
        .character-item--details {
            padding: var(--character-content--padding);
            > p:first-child {
                --font-color: var(--highlight-01);
                width: max-content;
                &::after {
                    background-color: var(--highlight-01);; 
                    content: "";
                    display: block;
                    height: 1px;
                    width: 100%;
                }
            }
            > p:not(:first-child) {
                --font-weight: bold;
                > span {
                    --font-weight: normal;
                    background: var(--dark-03);
                    border-radius: 1rem;
                    padding: 0.25rem 0.5rem;
                }
            }
        }
    }

    %characters-list--layout {
        --character-item--max-width: 15rem;
        --character-list--gap: 1rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(var(--character-item--max-width), 1fr));
        justify-items: center;
    }

    %character-item--layout {
        display: grid;
        grid-template-rows: repeat(2, 1fr) repeat(6, minmax(max-content, 2rem));
        gap: 0.25rem;
        > header, > .character-item--details {
            display: grid;
            grid: subgrid / subgrid;
            align-items: center;
        }
        > header, > header > img {
            grid-row: 1 / 3;
        }
        > .character-item--details {
            grid-row: 3 / 9;
            > p:first-child {
                grid-row: span 2;
            }
            > p:not(:first-child) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                justify-content: space-between;
                > span {
                    justify-self: end;
                }
            }
        }
    }

    .characters-list {
        @extend %characters-list--layout;
        @extend %characters-list--styles;
        > .character-item {
            @extend %character-item--layout;
            @extend %character-item--styles;
        }
    }
</style>

<Page 
    pageTitle="Characters Gallery" 
    pageDescription="A curated list of all the caracters within the star wars universe."
>
    <section class="characters-list">
        {#each $getCharacters as { id, name, birth_year, gender, height, mass } }
            <article class="character-item">
                <header>
                    <img src={`assets/characters/${id}.jpg`} alt={name}>
                    <p class="character-item--name">{name}</p>
                </header>
                <section class="character-item--details" aria-label="character-details">
                    <p class="about">About</p>
                    <p class="character-item--birth-year">Birth year: <span>{birth_year}</span></p>
                    <p class="character-item--gender">Gender: <span>{gender}</span></p>
                    <p class="character-item--height">Height: <span>{height}cm</span></p>
                    <p class="character-item--weight">Weight: <span>{mass}kg</span></p>
                </section>
            </article>
        {/each}
    </section>
</Page>