let linkFB = "https: //www.facebook.com/ngothucdat";

function getIdName(linkFB) {
    let index = linkFB.lastIndexOf('/');
    let idNameFB = linkFB.slice(index + 1);
    console.log(idNameFB);
}
getIdName(linkFB);