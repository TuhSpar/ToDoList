document.addEventListener("DOMContentLoaded", function(event) {

    const colorOne = document.getElementById('color-one');
    const colorTwo = document.getElementById('color-two');
    const colorThree = document.getElementById('color-three');

    const mainButton = document.getElementById('new-task-submit');

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const arr = [];

    let submit = form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please add a task')
        } else {

            const createContentAll = function() {
                const content = document.createElement('div'); //MAIN WRAPPER
                content.classList.add('task');

                const content_item = document.createElement('div'); //EDITOR-INPUT WRAPPER
                content_item.classList.add('content');
                content.appendChild(content_item);


                let num = 0;

                if (colorOne.checked) {
                    const indicatorOne = document.createElement('div'); //COLOR INDICATOR
                    indicatorOne.classList.add('task-color-point');
                    content_item.appendChild(indicatorOne);
                    indicatorOne.style.backgroundColor = '#a340ff';
                    num = 1;
                } else if (colorTwo.checked) {
                    const indicatorTwo = document.createElement('div'); //COLOR INDICATOR
                    indicatorTwo.classList.add('task-color-point');
                    content_item.appendChild(indicatorTwo);
                    indicatorTwo.style.backgroundColor = '#ff4040';
                    num = 2;
                } else if (colorThree.checked) {
                    const indicatorThree = document.createElement('div'); //COLOR INDICATOR
                    indicatorThree.classList.add('task-color-point');
                    content_item.appendChild(indicatorThree);
                    indicatorThree.style.backgroundColor = '#7cff40';
                    num = 3;
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


                return num;

                arr.sort((a, b) => {
                    if (a > b) {
                        return 1;
                    } else if (a == b) {
                        return 0;
                    } else if (a < b) {
                        return -1;
                    }
                });
            }

            arr.push(createContentAll());
            console.log(arr)




        }




    })

})