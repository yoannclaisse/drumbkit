/**
 * Setup
 */
// Elements 3d sound board
const $keyboard = document.querySelector('.base')
const $buttons = $keyboard.querySelectorAll('.button')
const $screen = $keyboard.querySelector('.face-screen')
// Elements responsive flat sound board
const $keyBoardResponsive = document.querySelector('.base-responsive')
const $buttonsResponsive = $keyBoardResponsive.querySelectorAll('.button-responsive')
const $screenResponsive = $keyBoardResponsive.querySelector('.screen-responsive')


// Sounds
const sounds = [
    new Audio('./sources/sounds/bouzouki-1.mp3'),
    new Audio('./sources/sounds/bouzouki-2.mp3'),
    new Audio('./sources/sounds/bouzouki-3.mp3'),
    new Audio('./sources/sounds/bouzouki-4.mp3'),
    new Audio('./sources/sounds/bouzouki-5.mp3'),
    new Audio('./sources/sounds/bouzouki-6.mp3'),
    new Audio('./sources/sounds/bouzouki-7.mp3'),
    new Audio('./sources/sounds/bouzouki-8.mp3'),
    new Audio('./sources/sounds/bouzouki-9.mp3'),
    new Audio('./sources/sounds/bouzouki-10.mp3'),
    new Audio('./sources/sounds/bouzouki-11.mp3'),
    new Audio('./sources/sounds/bouzouki-12.mp3'),
]

/**
 * function "start" for the mecanic of 3d and flat sound board
 */
const start = () =>
{
    // condition with screen size
    if(window.matchMedia("(min-width: 320px)").matches)
    {
        // wave for navigate inside array of $buttons for 3d sound bar
        for(const $button of $buttons)
        {
            // event listener for the mousse down
            $button.addEventListener('mousedown', () =>
            {
                const buttonIndex = $button.dataset.buttonIndex
                const sound = sounds[buttonIndex]
                sound.currentTime = 0
                sound.play()
                $screen.style.backgroundImage = `url(./sources/images/image-${buttonIndex}.jpg)`
            })
        }
        // wave for navigate inside array of $buttonsResponsive for flat sound bar
        for(const $buttonResponsive of $buttonsResponsive)
        {
            $buttonResponsive.addEventListener('mousedown', () =>
            {
                const buttonResponsiveIndex = $buttonResponsive.dataset.buttonResponsiveIndex
                const sound = sounds[buttonResponsiveIndex]
                sound.currentTime = 0
                sound.play()
                $screenResponsive.style.backgroundImage = `url(./sources/images/image-${buttonResponsiveIndex}.jpg)`
            })
        }
    }
}

start()