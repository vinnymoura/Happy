//create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);
// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
    .addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

// create and add marker
let marker;

map.on("click", function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat
    document.querySelector("[name=lng]").value = lng

    //remover icon
    marker && map.removeLayer(marker)

    //add icon Layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})


//photos upload
function addPhotoField() {
    //pegar o container de photos #images
    const container = document.querySelector('#images')
        // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
        // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
        //verificar se está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }
    //limpar campo antes de adicionar
    input.value = ""
        // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length <= 1) {
        //limpar o valor do campo 
        span.parentNode.children[0].value = ''
        return
    }

    //deletar o campo 
    span.parentNode.remove(0);

}

// seleção do sim e não 
function toggleSelect(event) {

    //retirar a class .active dos botões
    document.querySelectorAll(".button-select button")
        .forEach(function(button) {
            button.classList.remove("active")
        })

    // colcoar a class .active no botao 
    const button = event.currentTarget
    button.classList.add("active")

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}

function validate(event) {
    document.querySelector(".map-container")
    const lat = document.querySelector("[name=lat")
    const long = document.querySelector("[name=lng]")

    //validar se lat e long estão preenchidos
    if (lat.value == "" && long.value == "") {
        event.preventDefault()
        alert('Clique em um ponto no mapa')

    }

    //salvar um orfanato


};

document.querySelector("#home").addEventListener("click", myFunction, false);

function myFunction() {
    window.location.href = "/";
}