// $(document).ready(() => {
//     console.log('ready');
//     $('.navigation').load('../src/common/navbar.html');
// });

// dark mode
const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");

const toggleDarkMode = function () {
    checkbox.checked ?
        html.classList.add("dark") :
        html.classList.remove("dark");
}

//calling the toggleDarkMode function directly

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

// upload file
var file = document.getElementById('file-filter');

file.onchange = function (e) {
    var ext = this.value.match(/\.([^\.]+)$/)[1];
    switch (ext) {
        case 'doc':
        case 'docx':
            var fileName = e.target.files[0].name;
            alert('File "' + fileName + '" berhasil di-upload :)');
            break;
        default:
            alert('Upload file gagal :( silakan upload file berformat .doc atau .docx');
            this.value = '';
    }
};