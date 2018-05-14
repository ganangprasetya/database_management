@if (Session::has('sweet_alert.alert'))
    <script>
        swal({
            title: "{!! Session::get('sweet_alert.title') !!}",
            text: "{!! Session::get('sweet_alert.text') !!}",
            icon: "{!! Session::get('sweet_alert.type') !!}",
        });
    </script>
@endif
