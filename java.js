// js/java.js
document.addEventListener("DOMContentLoaded", function () {

    // Zoom nas imagens (banners, cards e logo)
    document.addEventListener("DOMContentLoaded", function () {
        // Zoom
        document.querySelectorAll('.zoomable').forEach(img => {
            img.addEventListener('click', function () {
                const zoomedImg = document.getElementById('zoomedImg');
                zoomedImg.src = this.src;
                const modalEl = document.getElementById('zoomModal');
                const zoomModal = new bootstrap.Modal(modalEl);
                zoomModal.show();
            });
        });

        // Bolinhas de cor
        document.querySelectorAll('.color-dot').forEach(dot => {
            dot.addEventListener('click', function () {
                document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
                this.classList.add('active');
                document.body.style.backgroundColor = this.getAttribute('data-bg');
            });
        });
    });


    // Troca de cor de fundo pelas bolinhas
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', function () {
            document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            document.body.style.background = this.getAttribute('data-bg');
        });
    });

});

