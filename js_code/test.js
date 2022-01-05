function selectorTest()
{
    let item = document.querySelectorAll('p');
    for(const item of items)
        item.style.color = 'blue';
}
