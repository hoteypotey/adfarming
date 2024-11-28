document.getElementById("showAdBtn").addEventListener("click", function () {
    var adContainer = document.getElementById("ads-container");
    if (adContainer.style.display === "none" || adContainer.style.display === "") {
        adContainer.style.display = "block";
    } else {
        adContainer.style.display = "none";
    }
});
