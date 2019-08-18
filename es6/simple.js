function highlightParas(containing) {
    if (typeof containing === 'string') {
        let expression = '\\b' + containing + '\\b';
        containing = new RegExp(expression, 'i');
    }
    const paras = document.getElementsByTagName('p');
    for (let p of paras) {
        if (!containing.test(p.textContent.trim())) continue;
        p.classList.add('highlight');
    }
}

function removeParaHighlight() {
    const paras = document.querySelectorAll('p.highlight');
    for (let p of paras) {
        p.classList.remove('highlight');
    }
}

const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of highlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    })
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        removeParaHighlight();
    })
}
