const buscetItemsList = document.querySelector('.basket__items__list');
const productsContainer = document.querySelector('.products__container');
const notificationsContainer = document.querySelector('.notifications__wrapper');

const notify = new Notification(notificationsContainer);
const observable = new Observable();

const busketObserver = new Observer(id => {
    const itemNode = document.createElement('li');
    itemNode.className = 'basket__item';
    itemNode.innerHTML = `Product ${id}`;
    buscetItemsList.appendChild(itemNode);
});

const modalObserver = new Observer(id => {
    notify.info(`Product ${id} is added to Your basket!`);
});

observable.addObserver(busketObserver);
observable.addObserver(modalObserver);

productsContainer.addEventListener('click', ({ target }) => {
    console.log(target);
    if (target.tagName !== 'DIV') {
        return;
    }

    const id = target.dataset.id;
    observable.sendMessage(id);
});