<script>
import { Link } from "svelte-routing";

   

</script>

<style type="text/scss">
    %home-page--styles {
        > .home-page--header, > .home-page--crawl {
            --font-color: hsl(0, 0%, 0%);
            --font-family: "Death Star", "Space Grotesk", sans-serif;
            --letter-spacing: 1px;
            text-shadow:  
                -1px -1px 0 var(--highlight-01),  
                1px  -1px 0 var(--highlight-01),
                -1px 1px 0 var(--highlight-01),
                1px  1px 0 var(--highlight-01);
        }
        > .home-page--header {
            --font-size: 3rem;
        }
        > .home-page--crawl {
            --font-family: "Death Star", "Space Grotesk", sans-serif;
            --font-size: 5rem;
            > span:nth-child(2) {
                --font-color: var(--highlight-01);
            }
        }
    }
    %home-page--layout {
        display: grid;
        grid-template-rows: [header] max-content [crawl] max-content [main-content] max-content;
        align-content: space-around;
        justify-items: center;
        > .home-page--crawl {
            display: grid;
            grid-template-rows: repeat(3, max-content);
            align-content: center;
            justify-items: center;
        }
    }
    .home-page {
        @extend %home-page--layout;
        @extend %home-page--styles;
    }
        
</style>

<section class="home-page">
    <h1 class="home-page--header">
        FED@IBM WELCOME AND MAY THE <span>4TH</span> BE WITH YOU!
    </h1>
    <section class="home-page--crawl">
        <span>CSS</span>
        <span>BEYOND THE GRID</span>
    </section>
    <Link class="home-page--action" to="movies">Let's Begin!</Link>
</section>