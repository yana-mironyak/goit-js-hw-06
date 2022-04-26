const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

itemEl.forEach((item) => {
    console.log(item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
})
