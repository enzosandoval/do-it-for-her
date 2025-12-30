document.addEventListener('DOMContentLoaded', function() {

    document.body.style.backgroundColor = "#6875b8"; 
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden"; 
    document.body.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive';

    const WOOD_COLOR = "#c9a781"; 
    const frame = document.createElement('div');
    frame.style.display = "grid";
    frame.style.placeItems = "center";
    frame.style.background = WOOD_COLOR; 
    frame.style.border = "0.3vw solid black"; 
    frame.style.borderRadius = "0"; 
    frame.style.padding = "2.4vw"; 
    frame.style.boxShadow = "0.5vw 0.5vw 1vw rgba(0,0,0,0.6)";
    frame.style.width = "85vw"; 
    frame.style.maxWidth = "900px"; 
    document.body.appendChild(frame);

    const poster = document.createElement('div');
    poster.style.position = "relative";
    poster.style.width = "100%";
    poster.style.aspectRatio = "2/1"; 
    poster.style.background = "#ffffff"; 
    poster.style.border = "0.3vw solid black"; 
    poster.style.overflow = "visible"; 
    frame.appendChild(poster);

    const textDiv = document.createElement('div');
    textDiv.style.position = "absolute";
    textDiv.style.top = "10%"; 
    textDiv.style.width = "100%";
    textDiv.style.textAlign = "center";
    textDiv.style.fontWeight = "900"; 
    textDiv.style.color = "#2c1b05"; 
    textDiv.style.zIndex = "2"; 

    textDiv.style.fontSize = "clamp(15px, 6.5cqw, 70px)"; 
    
    textDiv.style.letterSpacing = "0.4em"; 
    textDiv.style.lineHeight = "1.82"; 

    textDiv.style.textTransform = "uppercase"; 
    textDiv.style.fontFamily = '"Comic Sans MS", "Comic Sans", cursive'; 

    textDiv.style.whiteSpace = "nowrap"; 
    textDiv.style.display = "flex";
    textDiv.style.flexDirection = "column";
    textDiv.style.alignItems = "center";

    textDiv.innerHTML = `
      <div style="margin-bottom: 0.2em;">DON’T FORGET:</div>
      <div style="margin-bottom: 0.2em;">YOU’RE HERE</div>
      <div>FOREVER.</div>
    `;
    poster.appendChild(textDiv);

    poster.style.containerType = "size";


    const photos = [
        { src: "images/chisato10.jpg", top: "-120%", left: "10%", width: "35%", rotate: 0 },
        { src: "images/chisato7.jpg", top: "10%", left: "28%", width: "6%", rotate: 0 }, 
        { src: "images/chisato1.jpg", top: "14%", right: "75%", width: "6%", rotate: 0 }, 
        { src: "images/chisato4.jpg", top: "10%", right: "-5%", width: "26%", rotate: 0}, 
        { src: "images/chisato5.jpg", top: "-6%", left: "66%", width: "24%", rotate: 0  }, 
        { src: "images/chisato8.jpg", top: "30%", left: "32%", width: "20%", rotate: 0 }, 
        { src: "images/chisato9.jpg", bottom: "10%", left: "4%", width: "31%", rotate: 0 }, 
        { src: "images/chisato2.jpg", bottom: "-26%", right: "-6%", width: "22%", rotate: 0 }, 
        { src: "images/chisato6.gif", top: "60%", left: "32%", width: "42%", rotate: 0 },
        { src: "images/chisato11.png", top: "88%", left: "-40%", width: "42%", rotate: 0 },
    ];


    const createTape = (positionStyles) => {
        const tape = document.createElement('div');
        tape.style.position = "absolute";
        tape.style.width = "12%"; 
        tape.style.height = "5%"; 
        tape.style.background = "rgba(255, 255, 210, 0.5)"; 
        tape.style.boxShadow = "0 1px 3px rgba(0,0,0,0.3)"; 
        tape.style.borderRadius = "2px";
        
        tape.style.opacity = "0"; 
        tape.style.transition = "opacity 0.2s ease-in"; 
        
        Object.assign(tape.style, positionStyles);
        return tape;
    };

    photos.forEach((p, i) => {
        const container = document.createElement('div');
        container.style.position = "absolute";
        
        container.style.zIndex = `${3 + i}`; 
        
        if (p.top) container.style.top = p.top;
        if (p.bottom) container.style.bottom = p.bottom;
        if (p.left) container.style.left = p.left;
        if (p.right) container.style.right = p.right;
        container.style.width = p.width;
        
        const tapes = [];
        tapes.push(createTape({ top: '-1.5%', left: '-1.5%', transform: 'rotate(-45deg)' }));
        tapes.push(createTape({ top: '-1.5%', right: '-1.5%', transform: 'rotate(45deg)' }));
        tapes.push(createTape({ bottom: '-1.5%', left: '-1.5%', transform: 'rotate(45deg)' }));
        tapes.push(createTape({ bottom: '-1.5%', right: '-1.5%', transform: 'rotate(-45deg)' }));

        tapes.forEach(tape => {
            tape.style.zIndex = `${10 + i}`; 
            container.appendChild(tape);
        });


        const img = document.createElement('img');
        img.src = p.src;
        img.style.width = "100%";
        img.style.display = "block";
        img.style.border = "3px solid black"; 
        img.style.borderRadius = "0"; 
        img.style.boxShadow = "0.2vw 0.2vw 0.5vw rgba(0,0,0,0.4)";
        
        img.style.transform = `rotate(${p.rotate}deg) scale(0.9)`;
        img.style.transition = "all 0.8s ease";
        img.style.opacity = "0";
        
        container.appendChild(img);
        poster.appendChild(container);

        setTimeout(() => { 
            img.style.opacity = "1";
            img.style.transform = `rotate(${p.rotate}deg) scale(1)`;

            
            setTimeout(() => {
                tapes.forEach(tape => {
                    tape.style.opacity = "1"; 
                });
            }, 900); 
            
        }, i * 400); 
    });
});