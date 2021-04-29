<script>
import { Link } from "svelte-routing";

   

</script>

<style type="text/scss">

    %home-page--styles {
        > .home-page--title {
            --font-size: 5rem;
            --font-family: "Death Star", "Space Grotesk", sans-serif;
            > span {
                --font-family: "Space Grotesk";
            }
        }
        > .home-page--subtitle {
            --font-size: 2rem;
            max-width: 35vw;
        }
        > .home-page--cover {
            width: 50vw;
            height: auto;
        }
    }
    %home-page--layout {
        display: grid;
        grid-template-areas: 
            "title cover" 
            "subtitle cover"
            "action cover";
        gap: 0 2rem;
        justify-content: space-between;
        align-content: center;
        > .home-page--title {
            grid-area: title;
            align-self: end;
        }
        > .home-page--subtitle {
            grid-area: subtitle;
        }
        > .home-page--cover {
            grid-area: cover;
        }
        :last-child {
            grid-area: action;
        }
    }
    .home-page {
        @extend %home-page--layout;
        @extend %home-page--styles;
    }
        
</style>

<section class="home-page">
    <h1 class="home-page--title">FED<span>@</span>IBM Hub</h1>
    <p class="home-page--subtitle">An awesome place to know a little bit more about the Star Wars Universe</p>
    <img class="home-page--cover" src="assets/cover.png" alt="May the 4th Cover">
    <Link class="home-page--action" to="movies-timeline">Let's Go!</Link>
</section>