let values = [];

let i = 0, j = 0, w = 5;

function setup() {
  fullscreen;
  colorMode(HSB, height);
  
  values = new Array(floor(width / w));
  
  for(let i=0 ; i<values.length ; i++){
    values[i] = random(height);
  }
  
}

function draw() {
  background(0);
  if(i < values.length ){
    if(j < values.length - i-1){
      for(let k=0 ; k < 10 ; k++){
        if(values[j] > values[j+1])
          swap(values, j, j+1);
        j++;
      }
    }
    else{
      j=0;
      i++;
    }
  }
  
  for(let i=0 ; i<values.length ; i++){
    let col = color(values[i], height, height);
	stroke(0);
    fill(col);
    rect(i*w , height-values[i] , w , values[i]);
  }
}

swap = function (arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}