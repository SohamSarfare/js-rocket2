// JavaScript Document
var timer=null;
var i = 9;
function changeSeq(state){
	clearInterval(timer);
	document.body.className = 'body-state'+state;
	
	if(state===2){
		timer= setInterval(function(){
			document.getElementById('countdown').innerHTML = i;
			i=i-1;
			if(i<0){
				changeSeq(3);
				document.getElementById('rocket').className='rocket flying';
				i = 10;
				}
			}, 500);	
		}else if(state === 3){
			setTimeout(function(){
					   if(Math.random()>0.4){
							changeSeq(4);
					} else{
							document.getElementById('rocket').className = 'rocket';
							changeSeq(5);
				}
			},2000);
			
		}else{}
	}

