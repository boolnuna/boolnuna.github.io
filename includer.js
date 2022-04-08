$(document).ready(function () {

    let html = `
<div class="wrapper">
    <div onclick="toggleMenu()" id="menubtn">&equiv;</div>
    <!-- side navigation -->
    <div class="sidenav">
        <h3>Games</h3>
        <a href="/"><img class="img-mous" src="/res/mous.png" alt="mous"></a>
        <div class="container">
            <ul>
                <li><a href="/flatmobile" class="cool-link">FlatMobile</a></li>
                <li><a href="/pong" class="cool-link2">Pong </a></li>
                <li><a href="/stonk" class="cool-link3">Stonk </a></li>
                <li><a href="/tetris" class="cool-link4">Tetris</a></li>
            </ul>
            <div style="display: flex; justify-content: center; align-items: center; flex-flow: column;">
                <img src=/"res/moon.png" id="darkbtn" onclick="dark(!darkstate)">
            </div>
            <script>
                var darkbtn = document.getElementById("darkbtn")
                var darkstate = false
                $(document).ready(function () {
                    darkstate = JSON.parse(localStorage.getItem('dark')) === true
                    dark(darkstate)
                })

                function dark(state) {
                    if (state) {
                        $('body').get(0).style.setProperty('--primary-color', '#212121')
                        $('body').get(0).style.setProperty('--secondary-color', '#e6e6e6')
                        darkbtn.src = "/res/sun.png"
                    } else {
                        $('body').get(0).style.setProperty('--primary-color', '#e6e6e6')
                        $('body').get(0).style.setProperty('--secondary-color', '#212121')
                        darkbtn.src = "/res/moon.png"
                    }
                    darkstate = state;
                    localStorage.setItem('dark', state)
                }
            </script>

        </div>
    </div>
</div>
    `
    $('#nav').html(html)
    $('body').css('margin-left', '280px')
})

var menuOpen = false
function toggleMenu() {
    menuOpen = !menuOpen
    if (menuOpen) {
        $('.sidenav').hide()
        $('#menubtn').css('left', '12px')
        $('body').css('margin-left', '0px')
    } else {
        $('.sidenav').show()
        $('#menubtn').css('left', '280px')
        $('body').css('margin-left', '280px')
    }
}
