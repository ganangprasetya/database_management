@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        @role('administrator')
                        <li class="breadcrumb-item"><a href="#">Administrator</a></li>
                        @endrole
                        @role('super_user')
                        <li class="breadcrumb-item"><a href="#">{{ Auth()->user()->fullname }}</a></li>
                        @endrole
                        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            @role('administrator')
                <div class="card card-position-1 text-white">
                    <div class="card-header" style="background-color:#4CAF50;">
                        <i class="fa fa-database fa-5x"></i>
                        <div class="card-title-position">
                            <p style="font-size:50px;">{{ $databases }}</p>
                            <p style="margin-top:-20px;"> Database</p>
                        </div>
                    </div>
                    <div class="card-footer" style="text-align:right;">
                        <a href="{{ route('databases.manage') }}" style="color:#4CAF50;">View Details <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <div class="card card-position text-white">
                    <div class="card-header" style="background-color:#2196F3;">
                        <i class="fa fa-user fa-5x"></i>
                        <div class="card-title-position">
                            <p style="font-size:50px;">{{ $users }}</p>
                            <p style="margin-top:-20px;"> Users</p>
                        </div>
                    </div>
                    <div class="card-footer" style="text-align:right;">
                        <a href="{{ route('users.manage') }}" style="color:#2196F3;">View Details <i class="fa fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            @endrole
        </div>
    </div>
@endsection