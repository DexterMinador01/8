document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("code-form");
    const generatedHTML = document.getElementById("generated-html");
    const copyButton = document.getElementById("copy-button");
    const clearButton = document.getElementById("clear-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const codeInput = document.getElementById("code").value;
        const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twitch Player</title>

    <script src="https://player.twitch.tv/js/embed/v1.js"></script>
    <style>
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        #buttons-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }
        #fullscreen-btn, .back-button, #reload-btn {
            background-color: yellow;
            color: red;
            border: 2px solid red;
            border-radius: 5px;
            box-shadow: 2px 2px red;
            padding: 10px 20px;
            text-align: center;
            cursor: pointer;
            margin: 10px;
        }
        .back-button, #reload-btn {
            background-color: black;
            color: white;
            border: 2px solid white;
        }
        #twitch-player {
            border: 2px solid black;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div>
        <img src="https://dl.dropboxusercontent.com/s/pru51rlnayuytb6/IMG_20220610_205527.png" width="380" alt="Imagen descriptiva" />
    </div>
    <div id="twitch-player"></div>
    <div id="buttons-container">
        <button id="fullscreen-btn">Pantalla Completa</button>
        <button id="reload-btn">Recargar</button>
        <a href="https://dexterminador1.blogspot.com/2023/02/tv_2.html" class="back-button">Atrás</a>
    </div>

    <script>
        var options = {
            width: 380,
            height: 480,
            channel: "${codeInput}",
            controls: false,
            autoplay: true,
            muted: false,
        };

        var player = new Twitch.Player("twitch-player", options);
        player.setVolume(0.5);

        player.addEventListener(Twitch.Player.READY, function () {
            player.setQuality("chunked"); // Establecer la calidad más alta disponible
        });

        document.getElementById("fullscreen-btn").addEventListener("click", function () {
            var elem = document.getElementById("twitch-player").getElementsByTagName("iframe")[0];
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        });

        document.getElementById("reload-btn").addEventListener("click", function () {
            location.reload();
        });
    </script>
</body>
</html>`;
        generatedHTML.textContent = html;
        copyButton.disabled = false;
        clearButton.disabled = false;
    });

    copyButton.addEventListener("click", function () {
        const htmlToCopy = document.getElementById("generated-html").textContent;
        navigator.clipboard.writeText(htmlToCopy)
            .then(() => alert("HTML copiado al portapapeles"))
            .catch((err) => console.error('Error al copiar HTML: ', err));
    });

    clearButton.addEventListener("click", function () {
        generatedHTML.textContent = "";
        copyButton.disabled = true;
        clearButton.disabled = true;
    });
});