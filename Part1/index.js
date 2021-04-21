let tracker = []
function play(id) {
    let playerSpan = document.getElementById('player')
    let boxId = document.getElementById(id)
    boxId.innerText = playerSpan.innerText
    tracker[id] = playerSpan.innerText
    console.log(tracker)
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = '0'
    } else { playerSpan.innerText = 'X' }

    let topLeft = tracker[0]
    let topCenter = tracker[1]
    let topRight = tracker[2]
    let middleLeft = tracker[3]
    let middleCenter = tracker[4]
    let middleRight = tracker[5]
    let bottomLeft = tracker[6]
    let bottomCenter = tracker[7]
    let bottomRight = tracker[8]

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner`);
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner`);
        return;
    }
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner`);
        return;
    }
    let boardFull = true
    for (let i = 0; i < 9; i++) {
        if (tracker[i] === undefined) {
            boardFull = false

        }
    } if (boardFull === true) {
        alert(`DRAW`)
    }

}
