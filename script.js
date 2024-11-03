function volume_sphere() {
    //Write your code here

	document.getElementById("submit").addEventListener('click',(event)=>{
		event.preventDefault();
		 let radius= document.getElementById("radius").value;
		let volume ;
		if (isNaN(radius) || radius < 0) {
            volume = 'NaN';
        } else {
            radius = parseFloat(radius); // Convert to a number
            volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
			volume=volume.toFixed(4);
        }
		
		 document.getElementById("volume").value=volume;
	})
 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
