@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">Database Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Create Database</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form method="POST" action="{{ route('databases.store') }}" class="needs-validation" enctype="multipart/form-data" novalidate>
                    {{ csrf_field() }}
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="2" class="text-left">Add Database</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="w-25"><label for="Name" class="col-form-label">Name *</label></td>
                                <td>
                                    <input type="text" name="name" class="col-6 form-control{{ ($errors->has('name')) ? ' is-invalid':'' }}" id="Name" placeholder="Name" value="{{ old('name') }}" required>
                                    <div class="invalid-feedback">
                                        @if($errors->has('name'))
                                            {{ $errors->first('name') }}
                                        @else
                                            Name is required.
                                        @endif
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-25"><label for="Host" class="col-form-label">Host *</label></td>
                                <td>
                                    <input type="text" name="host" class="col-6 form-control{{ ($errors->has('host')) ? ' is-invalid':'' }}" id="host" placeholder="Host" value="{{ old('host') }}" required>
                                    <div class="invalid-feedback">
                                        @if($errors->has('host'))
                                            {{ $errors->first('host') }}
                                        @else
                                            Host is required.
                                        @endif
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-25"><label for="Port" class="col-form-label">Port *</label></td>
                                <td>
                                    <input type="text" name="port" class="col-6 form-control{{ ($errors->has('port')) ? ' is-invalid':'' }}" id="port" placeholder="Port" value="{{ old('port') }}" required>
                                    <div class="invalid-feedback">
                                        @if($errors->has('port'))
                                            {{ $errors->first('port') }}
                                        @else
                                            Port is required.
                                        @endif
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-25"><label for="Username" class="col-form-label">Username *</label></td>
                                <td>
                                    <input type="text" name="username" class="col-6 form-control{{ ($errors->has('username')) ? ' is-invalid':'' }}" id="username" placeholder="Username" value="{{ old('username') }}" required>
                                    <div class="invalid-feedback">
                                        @if($errors->has('username'))
                                            {{ $errors->first('username') }}
                                        @else
                                            Host is required.
                                        @endif
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-25"><label for="Password" class="col-form-label">Password</label></td>
                                <td>
                                    <input type="text" name="password" class="col-6 form-control" id="password" placeholder="Password" value="{{ old('password') }}">
                                </td>
                            </tr>
                            <tr>
                                <td><label for="note" class="col-form-label">Note</label></td>
                                <td>
                                    <textarea name="note" class="col-6 form-control" id="note" placeholder="Note">{{ old('note') }}</textarea>
                                </td>
                            </tr>
                            <tr class="border-bottom">
                                <th></th>
                                <th><button type="submit" class="btn btn-primary">Add</button></th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
@endsection
