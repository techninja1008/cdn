function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var pictureMap = {
  "1": []
};

(function(){
  var out = [];
  for(var i = 0; i < 160; i++) {
    out.append("./1/DSC_" + pad(i + 1, 34) +  ".JPG");
  }
  pictureMap["1"] = out;
})();

var pictures;
var index = -1;

$(function(){
  var hashValue = window.location.hash.substr(1);
  pictures = pictureMap[hashValue];
  
  setInterval(function(){
    if(index == -1){
      index = 0;
    }else{
      index++;
      if(!(index < pictures.length)){
        index = 0;
      }
    }
    
    $("body")[0].innerHtml = "<img src=\"" + pictures[index] + "\" />";
  }, 5000);
});