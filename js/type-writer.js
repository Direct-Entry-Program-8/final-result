var texts = [
    'Direct Entry Program 8',
    'We are born to code!',
    'Sri Lanka #1',
    'SE Pissange Ambalama'
];
var st = null;
var i = 0;
var j = 0;
var k = 0;
var elmStage = document.getElementById('stage');
var reverse = false;

function animateText(stamp){

    if (!st){
        st = stamp;
    }

    var interval = stamp - st;

    if (interval >= 70 && reverse){
        var text = texts[j];
        elmStage.innerText = text.substring(0, k--);

        if (k === 0){
            j++;
            reverse = false;

            if (j >= texts.length) j = 0;
        }
    }

    if (interval >= 100 && !reverse){
        st = stamp;

        var text = texts[j];
        elmStage.innerText = text.substring(0, i++);
        if (i > (text.length + 10)) {
            reverse = true;
            i = 0;
            k = text.length;
        }
    }

    requestAnimationFrame(animateText);

}

requestAnimationFrame(animateText);