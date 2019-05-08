(function ( $ ) {
    $('#registration').bootstrapValidator({
        submitHandler: function(validator, form, submitButton) {
            console.log(validator);
            console.log(form);
            console.log(submitButton);
//            return false;
        }, fields: {
            email: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and can\'t be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    },email: {
                        //regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'fuoxk'
                    }
                }
            }
        }
    }); 
}(jQuery));


