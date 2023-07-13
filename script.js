function removeElement(e) {
    const $element = e.target.closest(`.field`)
    $element.remove()
}

(function load() {
    const $form = document.getElementById("frmUsers");
    const $divElements = document.getElementById("divElements");
    const $btnAdd = document.getElementById("btnAdd");
    const $btnSave = document.getElementById("btnSave");

    const templateElement = () => {
        return (
            `<div class="field is-grouped">
            <div class="control has-icons-left">
            <input class="input" name="Name" type="text" placeholder="Nombre" autocomplete="off">
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
        </div>
        <div class="control has-icons-left">
            <input class="input" name="lastName" type="text" placeholder="" autocomplete="off">
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
        </div>
                <div class="control">
                    <button class="delete" onclick="removeElement(event)"></button>
                </div>
            </div>`
        );
    };
    
    $btnAdd.addEventListener("click", (e) => {
        const $div = document.createElement("div");
        // $div.classList.add("notification", "is-primary", "is-light", "mb-2", "mt-1")
        $div.innerHTML = templateElement(`${$form.Name.value} ${$form.lastName.value}`)
        $divElements.insertBefore($div, $divElements.firstChild);
        
        $form.reset();
    })
    
    $btnSave.addEventListener("click", (e) => {
        e.preventDefault();
    
        if ($form.Name.value.trim() === "") {
            $form.Name.classList.add("is-danger");
        } else {
            $form.Name.classList.remove("is-danger");
        }
    
        if ($form.lastName.value.trim() === "") {
            $form.lastName.classList.add("is-danger");
        } else {
            $form.lastName.classList.remove("is-danger");
        }
    
        if ($form.Name.value.trim() === "" || $form.lastName.value.trim() === "") {
            $form.Name.focus();
        } else {
            alert("Se guardaron los datos");
        }
    })
})();
