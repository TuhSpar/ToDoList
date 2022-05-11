document.addEventListener("DOMContentLoaded", function (event) {

    const colorItemOne = document.getElementById('color-one');
    const colorItemTwo = document.getElementById('color-two');
    const colorItemThree = document.getElementById('color-three');

    let defaultColorTwoThree = () => {
        colorItemTwo.style.background = '#6c757d';
        colorItemThree.style.background = '#6c757d';
    }

    let defaultColorOneThree = () => {
        colorItemOne.style.background = '#6c757d';
        colorItemThree.style.background = '#6c757d';
    }

    let defaultColorOneTwo = () => {
        colorItemTwo.style.background = '#6c757d';
        colorItemOne.style.background = '#6c757d';
    }

    let eOne = colorItemOne.addEventListener("click", (event) => {
        event.target.style.background = '#911bff';
        defaultColorTwoThree();
    });

    let eTwo = colorItemTwo.addEventListener("click", (event) => {
        event.target.style.background = '#dfff2a';
        defaultColorOneThree();

    });

    let eThree = colorItemThree.addEventListener("click", (event) => {
        event.target.style.background = '#70ff2e';
        defaultColorOneTwo();
    });


    /* let content = document.getElementById('content');
    content = []; */

    const mainButton = document.getElementById('new-task-submit');

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks')

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

            const indicator = document.createElement('div'); //COLOR INDICATOR
            indicator.classList.add('task-color-point');
            content_item.appendChild(indicator);

            const row = document.createElement('input'); //TASK EDITOR-INPUT
            row.classList.add('task-row');
            row.value = task;
            row.type = 'text';
            row.setAttribute('readonly', 'readonly')
            content_item.appendChild(row);

            const actions = document.createElement('div'); // BUTTTONS
            actions.classList.add('actions');
            content.appendChild(actions);

            const edit = document.createElement('button'); //EDIT-BUTTON
            edit.classList.add('edit');
            actions.appendChild(edit);
            edit.innerHTML = 'edit';

            const del = document.createElement('button'); //DELETE-BUTTON
            del.classList.add('delete');
            actions.appendChild(del);
            del.innerHTML = 'delete';

            list_el.appendChild(content);

            input.value = "";

            edit.addEventListener('click', () => {
                if (edit.innerHTML.toLowerCase() == 'edit') {
                    row.removeAttribute('readonly');
                    row.focus();
                    edit.innerText = 'save';
                    console.log(1)
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


