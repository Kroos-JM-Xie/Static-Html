
	var reg_photo = document.getElementsByClassName("reg-photo");
	var reg_word = document.getElementsByClassName("reg-word");
	var reg_left = document.getElementsByClassName("reg-left");
	var reg_right = document.getElementsByClassName("reg-right");
	var num = 0;
	reg_right[0].onclick = function(){
		for(var i = 0; i < reg_photo.length; i++){
			
			reg_photo[i].style.borderColor = "#b0b0b0";
			
			reg_word[i].style.color = "#555";
			
		}
		num++;
		
		reg_photo[num%5].style.borderColor = "#34b3e0";
		reg_word[num%5].style.color = "#34b3e0";
	}
	reg_left[0].onclick = function(){

		for(var i = 0; i < reg_photo.length; i++){
			
			reg_photo[i].style.borderColor = "#b0b0b0";
			
			reg_word[i].style.color = "#555";
			
		}
		num=num+4;
		
		reg_photo[num%5].style.borderColor = "#34b3e0";
		reg_word[num%5].style.color = "#34b3e0";
	}

