import '../styles/drop-down.scss';

function dropDown(rootElement = document.querySelector('body'), options = []) {
    let dropDownRoot;
    let head;
    let isActive = false;

    function renderAll() {
        const list = document.createElement('ul');

        head = document.createElement('button');
        dropDownRoot = document.createElement('div');

        head.textContent = 'Select...';

        head.addEventListener('click', toggle);

        for (let i = 0; i < options.length; i++) {
            const li = document.createElement('li');
            const button = document.createElement('button');

            li.classList.add('drop-down__option');

            button.classList.add('drop-down__control');
            button.textContent = options[i];
            button.addEventListener('click', () => {
                select(options[i]);
            });
            
            li.appendChild(button);

            list.appendChild(li);
        }

        dropDownRoot.classList.add('drop-down');
        head.classList.add('drop-down__head');
        list.classList.add('drop-down__options');

        dropDownRoot.appendChild(head);
        dropDownRoot.appendChild(list);
        rootElement.appendChild(dropDownRoot);
    }

    function toggle() {
        if (isActive) {
            close()
        } else {
            open()
        }
    }

    function select(optionText) {
        head.textContent = optionText;
        close();
    }

    function open() {
        isActive = true;
        dropDownRoot.classList.add('drop-down_active');
    }

    function close() {
        isActive = false;
        dropDownRoot.classList.remove('drop-down_active');
    }


    renderAll();
}

export { dropDown };