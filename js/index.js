function collapseBanner(element){
    element.classList.toggle("rotatedArrow");
    console.log(element.parentElement.parentElement)

    element.parentElement.parentElement.classList.toggle("expandedText")
}

function paymentDialog(planId)
{
    window.location.href = "./error.html";
}