var faqContent = document.getElementById("container");
var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'https://design.propcom.co.uk/buildtest/accordion-data.json');

dataRequest.onload = function() {

    var faqData = JSON.parse(dataRequest.responseText);
    renderHTML(faqData.blocks);

    // console.log(faqData.blocks[0].heading);


};
dataRequest.send();


function renderHTML(data) {

    for(i = 0; i < data.length; i++){
        document.write('<button>'+data[i].heading+'</button>');
        console.log(data[i].heading);
    }

}