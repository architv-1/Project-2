import React from 'react'
import ThemeToggleButton from '../ui/theme-toggle-button'

const Theme = () => {
    return (
        <div className='my-20'>
            <div className=" w-[61.5%] mx-auto flex gap-4 item-center justify-center">
                <ThemeToggleButton variant="gif" url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif" />
                <ThemeToggleButton variant="gif" url="https://media.giphy.com/media/ArfrRmFCzYXsC6etQX/giphy.gif?cid=ecf05e47kn81xmnuc9vd5g6p5xyjt14zzd3dzwso6iwgpvy3&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
                <ThemeToggleButton variant='circle-blur' start='top-right'/>
                <ThemeToggleButton variant='gif' url='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRtNzd6Y3JuNmV2czExdXE0bHhqMnVqanI5YWFoY29wd2t6ejAwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wo5LFgd2tyQ9iz2GCi/giphy.gif'/>
                <ThemeToggleButton variant='gif' url='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmxneHA4azBpZjIxYXdnczdkdHc4emFuY3BlMWU5NDZpNnF1OWZtOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PRNZ4X2ECdVJlC8Mc8/giphy.gif'/>
                <ThemeToggleButton variant='polygon' start='top-right'/>
                <ThemeToggleButton variant='circle'/>
                <ThemeToggleButton variant='circle' start='center'/>


            </div>
        </div>
    )
}

export default Theme
