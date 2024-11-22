let patternValue = "";

function createPattern() {
    createThreeLayer();

    // First block of the pattern
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 4; j++) {  // Change inner loop variable to `j`
            patternValue += 'o';
        }
        patternValue += '<br />';
    }

    createThreeLayer();

    // Second block of the pattern
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 13; j++) {  // Change inner loop variable to `j`
            patternValue += '&nbsp';
        }
        for (let j = 1; j <= 4; j++) {  // Change inner loop variable to `j`
            patternValue += 'o';
        }
        patternValue += '<br />';
    }

    createThreeLayer();

    return patternValue;
}

function createThreeLayer() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 17; j++) {  // Change inner loop variable to `j`
            patternValue += 'o';
        }
        patternValue += '<br />';
    }
}

