var arr = [
    {
        dp: "hacker.avif",
        story: "a.avif"
    },
    {
        dp: "data.avif",
        story: "a1.avif"
    },
    {
        dp: "data1.avif",
        story: "a3.avif"
    },
    {
        dp: "data2.avif",
        story: "a4.avif"
    },
    {
        dp: "data3.avif",
        story: "a5.avif"
    }

]

var st = document.querySelector(".storiyan")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
<img id ="${idx}" src="${elem.dp}" alt="">
</div>`

})
console.log(clutter)

st.innerHTML = clutter
st.addEventListener("click", function (dets) {
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector("#fullscreen").style.display = "none"
    },1000)
});

