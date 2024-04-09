document.addEventListener('DOMContentLoaded', function() {
    let star1 = document.getElementById('star1');
    let star2 = document.getElementById('star2');
    let star3 = document.getElementById('star3');
    let star4 = document.getElementById('star4');
    let star5 = document.getElementById('star5');
    let stars = [star1, star2, star3, star4, star5];

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('mouseover', function() {
            for (let j = 0; j < i+1; j++) {
                stars[j].style.backgroundImage = "url('img/star.png')";
            }
        });

        stars[i].addEventListener('mouseout', function() {
            for (let j = 0; j < i+1; j++) {
                stars[j].style.backgroundImage = "none";
            }
        });
    }
});
