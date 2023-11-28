import { getInputDirection } from "./input.js";

export const Snake_Speed = 10
const SnakeBody = [{ x: 10, y: 11 }]
let newSegments = 0

export function update() {
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = SnakeBody.length - 2; i >= 0; i--) {
        SnakeBody[i + 1] = { ...SnakeBody[i] }
    }
    console.log("update snake..");
    SnakeBody[0].x += inputDirection.x
    SnakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    SnakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })

    console.log("draw snake..");
}

export function expandSnake(amount) {
    newSegments += amount
}

    export function onSnake(position , {ignoreHead = false}={}) {
    return SnakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead(){
    return SnakeBody[0]
}

export function snakeIntersection()
{
return onSnake(SnakeBody[0], {ignoreHead:true})
}



function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        SnakeBody.push({ ...SnakeBody[SnakeBody.length - 1] })
    }
    newSegments = 0
}   