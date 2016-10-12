var steps;

$(document).ready(function () {
    setDraggable($('.round'));
    droppable($('.tower'));
    steps = 0;
});


function setDraggable(element) {
    $(element)
        .attr('draggable', 'true')
        .bind('dragend', cancel)
        .bind('dragstart', function (event) {
            if (canBeDragged($(event.target).parent(), event.target.id))
                event.originalEvent.dataTransfer.setData("Text", event.target.id);
            return true;
        })
}


function canBeDragged(from, roundId) {
    return $(from).children()[4].id == roundId;
}

