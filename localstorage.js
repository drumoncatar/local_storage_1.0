/*
*
* Local Storage Handler 1.0
* @author	Dru Moncatar
* @docs	on going..
*
* A javascript plugin which handles the localstorage manipulations
* for the site
*
*/

function CPlatform(){
	
	this.localStorage = {

		set_local_storage : function(option){
			
			if(typeof(Storage) !== "undefined") {
				
				if(typeof(option.data) !== "object") {
					
					localStorage.setItem(option.name, option.data);
				} else {

					return "We can't accept the data";
				}
				
			} else {

				return "Sorry, your browser does not support Web Storage";
			}
		},

		get_local_storage : function(option){
			
			if(typeof(Storage) !== "undefined") {

				var data;
				data = JSON.parse(localStorage.getItem(option.name));
				return data;
			} else {

				return "Sorry, your browser does not support Web Storage";
			}
		},

		delete_local_storage : function(option){
			
			if(typeof(Storage) !== "undefined") {

				localStorage.removeItem(option.name);
			} else {

				return "Sorry, your browser does not support Web Storage";
			}
		}

	}

}

var core = new CPlatform();

// USAGE SAMPLE.
// core.localStorage.set_local_storage({name : 'current_news_id', data : {id : 1}});