document.addEventListener("DOMContentLoaded", function(event) {

    const colorOne = document.getElementById('color-one');
    const colorTwo = document.getElementById('color-two');
    const colorThree = document.getElementById('color-three');

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    const arr = [];
    let id = 0;

    form.addEventListener('submit', (e) => {
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

                if (colorOne.checked) {
                    const indicatorOne = document.createElement('div'); //COLOR INDICATOR
                    indicatorOne.classList.add('task-color-point');
                    content_item.appendChild(indicatorOne);
                    indicatorOne.style.backgroundColor = '#a340ff';
                    content_item.dataset.color_key = '1';
                } else if (colorTwo.checked) {
                    const indicatorTwo = document.createElement('div'); //COLOR INDICATOR
                    indicatorTwo.classList.add('task-color-point');
                    content_item.appendChild(indicatorTwo);
                    indicatorTwo.style.backgroundColor = '#ff4040';
                    content_item.dataset.color_key = '2';
                } else if (colorThree.checked) {
                    const indicatorThree = document.createElement('div'); //COLOR INDICATOR
                    indicatorThree.classList.add('task-color-point');
                    content_item.appendChild(indicatorThree);
                    indicatorThree.style.backgroundColor = '#7cff40';
                    content_item.dataset.color_key = '3';
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

                //Add item to list
                arr.push(content);

                //Delete button action
                del.addEventListener('click', (element) => {
                    //Get target element item
                    const target = element.target.parentElement.parentElement.parentElement;
                    //Or you can get target element more simple and like this in your case:
                    // const target = content;

                    //Get index of this element from array
                    const index = arr.indexOf(target);
                    //Remove element from array
                    arr.splice(index, 1);
                    //Remove element from DOM
                    target.remove();
                });
            }

            createContentAll();
            //sort and apply new elements list
            applyNewListData();

            /* localStorage.setItem('null', JSON.stringify(document.getElementById('task')));
            console.log(localStorage)
            localStorage.clear(); */
        }

        for (let key of arr) {
            key.querySelector('.edit').addEventListener('click', () => {
                if (key.querySelector('.edit').innerHTML.toLowerCase() == 'edit') {
                    key.querySelector('.task-row').removeAttribute('readonly');
                    key.querySelector('.task-row').focus();
                    key.querySelector('.edit').innerText = 'save';
                } else {
                    key.querySelector('.task-row').setAttribute('readonly', 'readonly');
                    key.querySelector('.edit').innerText = 'edit';
                }
            })
        }
    })

    function applyNewListData() {
        //Sorting items by color key
        arr.sort((a, b) => {
            if (a.querySelector('.content').dataset.color_key > b.querySelector('.content').dataset.color_key) {
                return 1;
            } else if (a.querySelector('.content').dataset.color_key === b.querySelector('.content').dataset.color_key) {
                return 0;
            } else if (a.querySelector('.content').dataset.color_key < b.querySelector('.content').dataset.color_key) {
                return -1;
            }
        });

        //Clean container before apply new elements from array
        list_el.innerHTML = '';

        //Apply new items to list container
        arr.forEach((el) => {
            list_el.appendChild(el);
        });
    }


})