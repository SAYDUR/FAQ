var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'https://design.propcom.co.uk/buildtest/accordion-data.json');

dataRequest.onload = function() {
    // console.log(dataRequest.responseText);

    var faqData = JSON.parse(dataRequest.responseText);

    console.log(faqData.blocks[0].heading);
};
dataRequest.send();