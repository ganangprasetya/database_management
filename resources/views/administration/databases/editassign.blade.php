@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">Database Management</a></li>
                        <li class="breadcrumb-item"><a href="{{ route('databases.userdb') }}">User Databases</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form method="POST" action="{{ route('databases.updateassign', $user->id) }}" class="needs-validation" enctype="multipart/form-data" novalidate>
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="2" class="text-left">Edit User Database {{ $user->fullname }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="w-25"><label for="database" class="col-form-label">Database *</label></td>
                                <td>
                                    <input type="hidden" name="user_database1" id="user_database1" value="{{ old('user_database', $old_databases) }}">
                                    <select for="user_database[]" class="selectize" name="user_database[]" multiple>
                                        <option value="">Select Database</option>
                                        @foreach($databases as $database)
                                        <option value="{{$database->id}}">{{ $database->name }}</option>
                                        @endforeach
                                    </select></br>
                                    <small>Old Databases :</small>
                                    <input type="text" name="user_database2" class="col-4 form-control" id="user_database2" value="{{ old('user_database', $old_databases_name) }}" readonly></br>
                                </td>
                            </tr>
                            <tr class="border-bottom">
                                <th></th>
                                <th><button type="submit" class="btn btn-primary">Update</button></th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
@endsection
