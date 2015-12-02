jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        console.log(msg)
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'bbP-KN8q5Bfo76EVKAZKPA',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'text': msg,
                    'to': [
                    {
                        'email': 'marcus@forestroad.co.uk',
                        'name': ' Marcus',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            $('#msgInfo').html("<div class='alert alert-success'>");
            $('#msgInfo > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
            $('#msgInfo > .alert-success')
            .append("<strong>Your message has been sent.</strong>");
            $('#msgInfo > .alert-success')
            .append('</div>');
            console.log('Your message has been sent. Thank you!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error sending message.');
            $('#msgInfo').html("<div class='alert alert-danger'>");
            $('#msgInfo > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
            $('#msgInfo > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please email yo@forestroad.co.uk!");
            $('#msgInfo > .alert-danger').append('</div>');
        });
        return false; // prevent page refresh
    });
});