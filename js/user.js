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
		}
}