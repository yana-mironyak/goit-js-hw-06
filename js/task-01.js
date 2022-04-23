const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

// const titleEl = document.querySelectorAll('h2');

// console.log('Category:', titleEl[0].textContent);
// console.log('Elements:', itemEl[0].lastElementChild.children.length);

// console.log('Category:', titleEl[1].textContent);
// console.log('Elements:', itemEl[1].lastElementChild.children.length);

// console.log('Category:', titleEl[2].textContent);
// console.log('Elements:', itemEl[2].lastElementChild.children.length);

// console.log(itemEl[2].children);

itemEl.forEach((item) => {
    console.log(item.firstElementChild.textContent);
    console.log(item.lastElementChild.children.length);
})
