const KEY_TO_POISTION = (() => {
  const aPosition = {
    y: 233,
    x: 127,
  };

    const aPosition = {
        y: 233,
        x: 127
    };
    const lettersAfterA = [
        "s", "d", "f", "g", "h", "j", "k", "l"
    ];

    const qPosition = {
        y: 170,
        x: 112,
    };
    const lettersAfterQ = [
        "w", "e", "r", "t", "y", "u", "i", "o", "p"
    ];

    const zPosition = {
        y: 296,
        x: 159,
    };
    const lettersAfterZ = "xcvbnm".split("");

    const keyMapping = {
        a: aPosition,
        z: zPosition,
        q: qPosition,
    };
  });

    const createAfterLetterFunction = (originalPosition) => {
        return (letter, index) => {
            keyMapping[letter] = {
                y: originalPosition.y,
                x: originalPosition.x + (64 * (index + 1))
            };
        };
    };

    lettersAfterA.forEach(createAfterLetterFunction(aPosition));
    lettersAfterQ.forEach(createAfterLetterFunction(qPosition));
    lettersAfterZ.forEach(createAfterLetterFunction(zPosition));

    return keyMapping;
})() ;


const createTransparentSquare = (keyboardKey) => {
    const square = document.createElement("div");
    square.className = "typing-indicator";
    square.id = `${keyboardKey}-key`;
    return square;
};

const runProgram = () => {

    const typingInterface = document.querySelector("#typing-interface");

    document.addEventListener("keydown", (event) => {
        if (typeof KEY_TO_POISTION[event.key] === "undefined") {
            return; // YOU SHALL NOT PASS.
        }
        // build a keymapping for the remaining
            // please help
        // unactivate
        const square = createTransparentSquare(event.key);
        square.style.top = `${KEY_TO_POISTION[event.key].y}px`;
        square.style.left = `${KEY_TO_POISTION[event.key].x}px`;
        typingInterface.appendChild(square);
    });

    document.addEventListener("keyup", (event) => {
        const keySquare = document.querySelector(`#${event.key}-key`);
        console.log(keySquare);
        keySquare.remove();
    });

};

window.addEventListener("DOMContentLoaded", runProgram);



