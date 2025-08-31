addToolsMenuItem("08 JZ draw", DrawCircle);

function DrawCircle(){
    var circle = document.getElementById("circle");
    if(circle) {
        document.body.removeChild(circle);
        return;
    }
    // var circle = document.createElement("div");
    // // circle.role = "dialog";
    // // circle.classList.add("my-class");
    // circle.style.width = "100px";
    // circle.style.height = "100px";
    // circle.style.backgroundColor = "red";
    // circle.style.borderRadius = "50%";
    // circle.style.position = "absolute";
    // circle.style.top = "40%";
    // circle.style.left = "10%";
    // circle.style.transform = "translate(-50%, -50%)";
    // circle.style.display = "block";
    // circle.style.zIndex = "1000";
    // circle.style.opacity = "0.5";
    // circle.id = "circle";

    // // var container = document.querySelector(".container");
    // // container.appendChild(circle);
    // document.body.appendChild(circle);
    // Step 1: Create the SVG element
        var imgElement = document.createElement('img');
        imgElement.id = 'circle';

        // Step 2: Set the necessary attributes for the img element
        var circleB64 = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOTSURBVHhe7ZBZruAoEATfWeY8fdk+4YxKStSMO8BgA94ypPghiy1/nsY/v3/926O2mbNQuSPVNaYGFbdCXW8CKuhK9axvQUXcUT33vdCne9VRzdAZveqod0Ef3VNbh0N3tajtz4Y+VlJblkNvKaktz4M+U1JbLofeVlJbngF9gNT47aC3khq/N/TwrRp9BPT+XI3dE3pwrsYeB/1lq0bvAT0wV2OPh/6Wq7FroYflauw10B9zNXYN9KBcjb0O+muuxtZCD8nV2Kuhfyc1sgZ6QFIjn4E6SGpkLnRxUiOfg7pIamQedGmo+LNQJ0mNjIcuCxV/HuomVDwWuihUbAR1FCoeA12Q1IjJoJ5Cxeegg5MaMRuoq6RGjkOHhopNAeosVHwMOjBUbHag7kLFfdBBoWLTCHUYKm6HDgkVm0aow1BxG3RAqNh0Ql2Givc5tdkghzuljaFicxDqNFRchjaFis1BqNNQcZlDm0wT3d3ShlCxOQl1Gyr+m65hc4iujruGzSGo41DxH5qGzBCaum4aMkNo6rppyAxht2saCBWbCVT7roZmCtXOq6GZQrXzamimUO28GpopVDuvhmYa2DsumiVg97holoDd46JZAnaPi2YJ2D0umiVg97holoDd46JZAnaPi2YJ2D0umiVg97holoDd46JZAnaPi2YJ2D0thtpjJlLsvRiYaVQ7r4ZmCtXOq6GZQrXzamimUO2cwlCxmcBu37sDZhhNXTcNmSE0dd00ZIbQ1DUNhYrNIKjjUPH/aR40h+nqmIZDxWYA3f12bzDNHOqWNoWKzQkO9UqbQsXmINRpqLgObQwVmwOc6pM2h4pNJ9RlqLgNOiBUbBqhDkPF7dAhoWLTCHUYKu6DDgoVmx2ou1DxMejAULEpQJ2Fio9DhyY1YjZQV0mNnIMODhWbDdRVqHgMdEGo2AjqKFQ8FrooVPx5qJtQ8XjosqRGPgt1ktTIHOjCpEY+B3WR1Mhc6OKkRj4DdZDUyBroAUmNvB76e1Ija6GH5GrsddBfczV2DfSgXI29BvpjrsauhR6Wq7HHQ3/L1dg9oAdu1ejjoL9s1ej9oMfmauwx0B9yNXZv6OFbNXpb6M1bNfoM6AMlteVy6G0lteV50GdKasty6C0lteXZ0Mf21NZp0J17aut7oE/2qGO6obN61DHvhT59R/Xcb0FFXKmeZaicleoZpgSVNlJdY85Axbao7Q/g5+c/3KtVb4sIynUAAAAASUVORK5CYII=';
        imgElement.setAttribute('src', "data:image/png;base64,{0}".format(circleB64)); // Replace with your image URL
        imgElement.setAttribute('alt', 'Centered Image');
        imgElement.setAttribute('class', 'img-center img-responsive'); // Make the image responsive and centered
        imgElement.style.top = '500px';  // Vertical position (Y-coordinate)
        imgElement.style.left = '500px'; // Horizontal position (X-coordinate)
        imgElement.style.width = '200px'; // Width of the image
        imgElement.style.height = '200px'; // Height of the image
        imgElement.style.position = 'absolute'; // Position the image
        document.body.appendChild(imgElement);

    window.nativeWindow.stage.swapChildrenAt(0, 1);
}