@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">User Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Create User</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form method="POST" action="{{ route('users.store') }}" class="needs-validation" novalidate>
                    {{ csrf_field() }}
                    @include('administration.users._form', [
                        'title' => 'Add New User',
                        'button_label' => 'Add'
                    ])
                </form>
            </div>
        </div>
    </div>
@endsection
