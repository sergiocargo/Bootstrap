// java.js
document.addEventListener("DOMContentLoaded", function () {

    // Zoom nas imagens (banners, cards e logo)
    document.addEventListener("DOMContentLoaded", function () {
        const zoomModalEl = document.getElementById('zoomModal');
        const zoomedImg = document.getElementById('zoomedImg');
        const zoomedText = document.getElementById('zoomedText');

        const zoomModal = new bootstrap.Modal(zoomModalEl);

        document.querySelectorAll('.zoomable').forEach(img => {
            img.addEventListener('click', function () {
                zoomedImg.src = this.src;
                zoomedText.textContent = this.dataset.text;

                // Força o modal a atualizar
                zoomModal.show();
                zoomModalEl.offsetHeight; // força reflow
            });
        });

        zoomModalEl.addEventListener('hidden.bs.modal', function () {
            // Limpa a imagem e o texto
            zoomedImg.src = '';
            zoomedText.textContent = '';
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
<script>
    function gerarMapaIframe(endereco) {
        // Substitui espaços por +, remove vírgulas e traços problemáticos
        let enderecoFormatado = endereco.trim()
    .replace(/,/g, '')      // remove vírgulas
    .replace(/-/g, '')      // remove traços
    .replace(/\s+/g, '+');  // substitui espaços por +

// G

