<script>
    import Page from "layout/Page.svelte";

    import { getMovies } from 'api/index.js';


</script>

<style type="text/scss">
    %movie-item--styles {
        background: hsl(0, 0%, 10%);
        border-radius: 1rem;
        border: 1px solid grey;
        box-shadow: 0 0 4px 2px var(--highlight-01);
        max-width: 80rem;
        opacity: 1;
        overflow: hidden;
        padding-right: 1rem;
        position: relative;
        z-index: 1000;
        img {
            height: 100%;
            width: 100%;
            max-height: 25rem;
            filter: brightness(70%);
        }
        .movie-item--title {
            --font-size: 2rem;
            --font-weight: 300;
            z-index: 1001;
            padding: 1rem 0;
        }
        .movie-item--crawl {
            font-style: italic;
        }
        > p:nth-of-type(n+3) {
            --font-weight: bold;
            > span {
                --font-weight: normal;
                background: var(--dark-03);
                padding: 0.25rem 0.5rem;
                border-radius: 1rem;
            }
        }
        > p:last-child {
            padding-bottom: 1rem;
        }
    }

    %movies-list--layout {
        padding: 3rem 1rem;
        display: grid;
        gap: 2rem;
        justify-content: center;
    }

    %movie-item--layout {
        display: grid;
        gap: 0.25rem 1rem;
        grid-template-columns: [img] 1fr [details] 2fr;
        grid-template-rows: repeat(5, max-content);
        grid-template-areas: 
            "img title"
            "img crawl-label"
            "img crawl"
            "img date"
            "img director"
            "img producer";
        > img {
            grid-area: img;
        }
    }

    .movies-list {
        @extend %movies-list--layout;
        > .movie-item {
            @extend %movie-item--layout;
            @extend %movie-item--styles;
        }
    }
</style>

<Page 
    pageTitle="Movies Timeline" 
    pageDescription="The absolute timeline of Star Wars movies, i think."
>
    <section class="movies-list">
        {#each $getMovies as { episode_id, title, director, opening_crawl, release_date, producer } }
            <article class="movie-item">
                <img src={`assets/movies/${episode_id}.jpg`} alt={title}>
                <header class="movie-item--title">{title}</header>
                <p class="movie-item--crawl-label">Opening crawl:</p>
                <p class="movie-item--crawl">{opening_crawl}</p>
                <p class="movie-item--release-date">Release date: <span>{release_date}</span></p>
                <p class="movie-item--director">Director: <span>{director}</span></p>
                <p class="movie-item--producer">Producer: <span>{producer}</span></p>
            </article>
        {/each}
     </section>
</Page>