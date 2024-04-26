function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    document.getElementById("searchBox").value = "";
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;


    fetch(url)
    .then(res => res.json())
    .then(data => display(data.meals));
}


function display(items) {
    var container = document.getElementById("container");
    container.textContent = "";

    var maxToShow = 5;


    for (var r = 0; r < items.length; r++) {
        if (r < maxToShow) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `Meal ID: <b>${items[r].idMeal}</b> <br> Meal Title: <b>${items[r].strMeal}</b><br>
                                <img src="${items[r].strMealThumb}"><br>
                               <b> Cooking Instruction: </b> ${items[r].strInstructions}<br><br>`;
            newDiv.classList.add("innerStyle");
            container.appendChild(newDiv);
        } else {
            if (r === maxToShow) {
                var showMoreButton = document.createElement("button");
                showMoreButton.textContent = "Show More";
                showMoreButton.onclick = function() {
                    for (var m = maxToShow; m < items.length; m++) {
                        var newDiv = document.createElement("div");
                        newDiv.innerHTML = `Meal ID: <b>${items[m].idMeal}</b> <br>  Meal Title: <b>${items[m].strMeal}</b><br>
                                            <img src="${items[m].strMealThumb}"><br>
                                            <b>Cooking Instruction:</b> ${items[m].strInstructions}<br><br>`;
                        newDiv.classList.add("innerStyle");
                        container.appendChild(newDiv);
                    }
                    showMoreButton.style.display = "none";
                };
                container.appendChild(showMoreButton);
            }
        }
    }
}