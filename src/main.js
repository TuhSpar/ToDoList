document.addEventListener("DOMContentLoaded", function(event) {

    const colorOne = document.getElementById('color-one');
    const colorTwo = document.getElementById('color-two');
    const colorThree = document.getElementById('color-three');

    const mainButton = document.getElementById('new-task-submit');

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const arr = [];


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please add a task')
        } else {

            const content = document.createElement('div'); //MAIN WRAPPER
            content.classList.add('task');

            const content_item = document.createElement('div'); //EDITOR-INPUT WRAPPER
            content_item.classList.add('content');
            content.appendChild(content_item);


            if (colorOne.checked) {
                const indicator = document.createElement('div'); //COLOR INDICATOR
                indicator.classList.add('task-color-point');
                content_item.appendChild(indicator);
                indicator.style.backgroundColor = '#a340ff';
            } else if (colorTwo.checked) {
                const indicator = document.createElement('div'); //COLOR INDICATOR
                indicator.classList.add('task-color-point');
                content_item.appendChild(indicator);
                indicator.style.backgroundColor = '#e2ff40';
            } else if (colorThree.checked) {
                const indicator = document.createElement('div'); //COLOR INDICATOR
                indicator.classList.add('task-color-point');
                content_item.appendChild(indicator);
                indicator.style.backgroundColor = '#7cff40';
            }

            const row = document.createElement('input'); //TASK EDITOR-INPUT
            row.classList.add('task-row');
            row.value = task;
            row.type = 'text';
            row.setAttribute('readonly', 'readonly')
            content_item.appendChild(row);

            const actions = document.createElement('div'); // BUTTTONS
            actions.classList.add('actions');
            content.appendChild(actions);

            const actionsContainer = document.createElement('div');
            actions.appendChild(actionsContainer);
            actionsContainer.classList.add('actionsContainer');

            const edit = document.createElement('button'); //EDIT-BUTTON
            edit.classList.add('edit');
            actionsContainer.appendChild(edit);
            edit.innerHTML = 'edit';

            const del = document.createElement('button'); //DELETE-BUTTON
            del.classList.add('delete');
            actionsContainer.appendChild(del);
            del.innerHTML = 'DEL';

            list_el.appendChild(content);

            input.value = "";

            edit.addEventListener('click', () => {
                if (edit.innerHTML.toLowerCase() == 'edit') {
                    row.removeAttribute('readonly');
                    row.focus();
                    edit.innerText = 'save';
                } else {
                    row.setAttribute('readonly', 'readonly');
                    edit.innerText = 'edit';
                }
            })

            del.addEventListener('click', () => {
                list_el.removeChild(content);
            })

        }
    })
})