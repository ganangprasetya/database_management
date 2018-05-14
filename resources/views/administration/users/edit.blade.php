@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">User Management</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('users.manage') }}">Manage Users</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form method="POST" action="{{ route('users.update', $user->id) }}" class="needs-validation" novalidate>
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    @include('administration.users._form', [
                        'title' => 'Edit User '.$user->fullname,
                        'button_label' => 'Update',
                        'fullname' => $user->fullname,
                        'email' => $user->email,
                        'role_id' => $user->roles()->first()->id
                    ])
                </form>
            </div>
        </div>
    </div>
@endsection
