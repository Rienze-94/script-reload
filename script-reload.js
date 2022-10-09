  <script type='text/javascript'>
		(function(){
		if(window.localStorage){
			if(!localStorage.getItem('atualizar') ){
			localStorage['atualizar'] = true;
			window.location.reload();
		}else
		 	localStorage.removeItem('atualizar');
		}
	})();
	</script>