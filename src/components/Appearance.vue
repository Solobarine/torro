<template>
    <div id="appearance">
        <h3>Appearance</h3>
        <div>
            <h4>Theme</h4>
            <div id="themes">
                <div class="theme light">
                    <div class="head"></div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <p>Light</p>
                </div>
                <div class="theme dark">
                    <div class="head"></div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <p>Dark</p>
                </div>
                <div class="theme black">
                    <div class="head"></div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="empty">
                        <div></div>
                        <div></div>
                    </div>
                    <p>Black</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #appearance {
        padding: 20px;
    }

    h4 {
        margin: 20px 0;
    }

    #themes {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .theme {
        width: 120px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 10px;
        transition: .4s ease;
    }

    .theme:hover {
        scale: 1.2;
        box-shadow: 2px 4px var(--text-alternative);
    }

    .head {
        padding: 10px;
        border-radius: 20px;
    }

    .empty {
        display: flex;
        gap: 10px;
        align-items: start;
    }

    .empty :nth-child(1) {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    .empty :nth-child(2) {
        padding: 3px;
        border-radius: 2px;
        align-self: center;
        width: 60px;
    }

    p {
        text-align: center;
    }

    .light {
        background-color: #fff;
        border: 1px solid var(--text);
    }

    .light .head {
        background-color: var(--primary);
    }

    .light .empty :nth-child(1) {
        background-color: var(--text);
    }

    .light .empty :nth-child(2) {
        background-color: var(--text-alternative);
    }

    .dark {
        background-color: #808080;
    }

    .dark .head {
        background-color: rgb(29, 128, 29);
    }

    .dark .empty :nth-child(1) {
        background-color: var(--text);
    }

    .dark .empty :nth-child(2) {
        background-color: var(--text-alternative);
    }

    .black {
        background-color: #333;
    }

    .black .head {
        background-color: rgb(9, 54, 9);
    }

    .black .empty :nth-child(1) {
        background-color: var(--text);
    }

    .black .empty :nth-child(2) {
        background-color: var(--text-alternative);
    }

    .black p {
        color: var(--gray)
    }
</style>