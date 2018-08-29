function visibility(elements, link) {
    var link = $(link),
        elements = $(elements);

    elements.removeClass('d-none');
    link.remove();
}