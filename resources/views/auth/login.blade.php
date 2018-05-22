<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html" />
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <link rel="stylesheet" href="{{ asset('css/css.css') }}"/>

        <script type="text/javascript" src="{{ asset('js/login.js') }}"></script>

        <title>ByonChat CMS Template</title>

    </head>

    <body class="d-flex align-items-center h100" id="halamanlogin">

        <div class="mx-auto" style="width: auto;height: auto;">

            @if($errors->any())
            <div class="alert alert-danger" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="alert-heading">Information!</h4>
                <ul>
                    @foreach($errors->all() AS $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
            @endif

            <div class="mx-auto" style="font-family: gothic;color:white;display:table;font-size: 5em;">S M S&nbsp;&nbsp;&nbsp;&nbsp;M O N I T O R I N G</div>

            <div class="mx-auto text-center" id="kotaklogin">
                <form method="POST" action="{{ route('login') }}" class="needs-validation" novalidate style="top: 110px;position: relative;left: 80px;width:240px;">
                    {{ csrf_field() }}
                    <label>EMAIL</label><br />
                    <input type="email" name="email" id="inputusername" /><br />
                    <label>PASSWORD</label><br />
                    <input type="password" name="password" id="inputpassword" /><br />
                    <br />
                    <input type="submit" id="tombollogin" value="LOG IN" class="btn btn-primary btn-lg btn-block" />
                </form>
            </div>

            <div class="mx-auto" id="tempatCopyrightLogin">Copyright &COPY; 2018 Dartmedia. All Rights Reserved</div>
        </div>

    </body>
</html>

