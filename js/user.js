$(function(){
	user.init();
});

var user = {
	$el : {},

		init : function(){

			this.$el = $('.container');

			this.$el.find('#btnSignup').click(function(){
				user.showModal();
			});

			this.$el.find('#btnClose').click(function(){
				user.closeModal();
			});
			
			this.$el.find('#btnSubmit').click(function(){
				user.signUp();
			});
		},
			this.$el.find('#btnClose').click(function(){
				this.resetModal();
				this.$el.find('#userModel').modal();

			});
		},
			showModal : function(){
			this.$el.find('#userModal').modal('hide');
		},
			closeModal : function(){
				this.$el.find('.signForms').val('');
		},
		
		signUp : function(){
			var email = this.$el.find('#inputEmail').val(),
				password = this.$el.find('#inputPassword').val(),
				passwordConfirm = this.$el.find('#inputPasswordConfirm').val()
				name = this.$el.find('#inputName').val(),
				job = this.$el.find('#inputJob').val();
			
		validate : function(){
		var $signForms = this.$el.find('.signForms'),
			result = true;

		$.each($signForms, function(index, signForm){
			var $signForm = $(signForm);

			if(!$signForm.val()){
				$signForm.addClass('empty');
				result = false;
			}else{
				$signForm.removeClass('empty');
			}
		});

		return result;
	}

}
