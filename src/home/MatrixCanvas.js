import React from 'react';
import { useEffect, useRef } from "react";

const MatrixCanvas = props => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = document.querySelector(".MatrixCanvas");
        const ctx = canvas.getContext("2d");

        // Make the canvas go full screen.
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Characters.
        var chr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,./<>?";
        // Converting the string into an array of characters.
        chr = chr.split("");

        var font_size = 10;
        var columns = canvas.width/font_size; // Number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#0F0"; //green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chr character to print
                var text = chr[Math.floor(Math.random()*chr.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                
                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;
                //incrementing Y coordinate
                drops[i]++;
            }
        }
        setInterval(draw, 33);
    }, [])
    
    return <canvas ref={canvasRef} {...props}/>
}

export default MatrixCanvas;
