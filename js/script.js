var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://design.propcom.co.uk/buildtest/accordion-data.json');

ourRequest.onload = function() {
    console.log(ourRequest.responseText);
};
ourRequest.send();