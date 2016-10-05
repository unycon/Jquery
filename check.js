function _is_numdash(){
	var args = Array.prototype.slice.call( arguments, 0 );
		args.map( function(){ return $.trim( $(this) );} );
		str = match_phone = $.trim( args.join("") );

	var regBank = /^[0-9\-]+$/;
	if( !str || str == "" ){return false;}
	else { if(!regBank.test(account)) {return false;} }
	return str;
}

function _is_email(email){
	email  = $.trim(email);
	var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if( !email || email == "" ){ return false; }
	else { if(!regEmail.test(email)) {return false;} }
	return email;
}

function _is_phone(){
	var args = Array.prototype.slice.call( arguments, 0 );
		args.map( function(){ return $.trim( $(this) );} );
		phone = match_phone = $.trim( args.join("") );

	if(typeof(phone) === "undefined") return false;

	var regPhone = /^([0-9]{3}\-[1-9][0-9]{2,3}\-[0-9]{4})$/;
	if(regPhone.test(match_phone)) { match_phone = match_phone.replace(/[-]/gi, ""); }

	var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
	if( !match_phone || match_phone == "" ){ return false; }
	else { if(!regPhone.test(match_phone)) {return false;} }
	return phone;
}
