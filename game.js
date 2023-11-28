import {update as updateSnake, draw as drawSnake,  Snake_Speed  , getSnakeHead , snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import { getInputDirection } from "./input.js"
import { outSideGrid } from "./grid.js"

let lastRenderTime = 0
let gameOver = false
let gameBoard = document.getElementById('board')



function main(currentTime){



    if (gameOver)
    {
        if(gameOver)
        {
            if(confirm('you lost the game.....! press OK to Play Again...'))
            {
                window.location = "/"
            }
        }
        return
    }
    getInputDirection()
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000
    if(secondSinceLastRender < 1 / Snake_Speed) return

    console.log("render")
    lastRenderTime = currentTime

    update()
    draw()
}
window.requestAnimationFrame(main)


function update()
{
    updateSnake()
    updateFood()
    checkDeath()
}

function draw()
{
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath()
{
gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}