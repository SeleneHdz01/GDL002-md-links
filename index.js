const fs = require("fs");
const path = require("path");
const pathFile = process.argv[2];
const links = require("./containerLinks");
const readingFile = links(pathFile, null);

/**Función que verifica si el campo esta vacio ó no */
const pathInserted = (pathFile) =>{
  if(pathFile == undefined){
  console.log("false");
  return false
}
  else{
  return true
} 
};


/**Función que verifica si la ruta existe o no*/

const pathWorking = (pathFile) =>{
  if(fs.existsSync(pathFile)){
  console.log("true");
  return true
}
else{
  console.log("false");
}
return false
};
    
/**Función que verificar si la ruta es un directorio */

const pathDirectory = (pathFile) =>{
  if(fs.statSync(pathFile).isDirectory()){
  return true
} else{
  return false
  }
};

/**Función que revisa si la ruta tiene extención .md */

const pathMd = (pathFile) =>{
  if (path.extname(pathFile) === ".md"){
  return true
}
  else {
    return false
  }
};

/**Función leyendo el archivo */
readingFile.then(
  (data)=> { // On Success
    console.log("Found links:");
    urlify(data);
  },
(err)=> { // On Error
console.error(err);
});
/*const readingFile = (pathFile) =>{
  let file = fs.readFileSync(pathFile, "utf-8");
  console.log(file);
  return true;
};*/

function urlify(data) {
  const mdLinkRgEx = /\[(.+?)\]\((.+?\))/g;
  const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
  let allLinks = data.match(mdLinkRgEx);
  let htmlLinks = [];
  for (let x in allLinks) {
    let grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    let grupoData = {
    href: grpdDta[2],
    text: grpdDta[1],
    file: pathFile
  }; 
  htmlLinks.push(grupoData);   
}
  console.log(htmlLinks.length);
  console.log(htmlLinks);
  return (htmlLinks);
}
//console.log(module.exports.urlify("./README.md"));

module.exports = {
  "pathInserted": pathInserted,
  "pathWorking": pathWorking,
  "pathDirectory": pathDirectory,
  "pathMd": pathMd,
  "urlify": urlify,
  "readingFile": readingFile,
}