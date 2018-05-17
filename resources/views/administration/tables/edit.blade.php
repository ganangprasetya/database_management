@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">Table Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form method="POST" action="{{ route('tables.update', $table->id) }}" class="needs-validation" novalidate>
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="2" class="text-left">Edit Table {{ $table->name }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="w-25"><label for="database" class="col-form-label">Database *</label></td>
                                <td>
                                    <select class="selectize {{ ($errors->has('database')) ? ' is-invalid':'' }}" name="database" placeholder="Select Database" required>
                                        @foreach($databases as $database)
                                        <option value="{{$database->id}}"{{ Library::compareOption($database->id, old('database_id', $table->database->id)) }}>{{ $database->name }}</option>
                                        @endforeach
                                    </select>
                                    <div class="invalid-feedback">
                                        @if($errors->has('database'))
                                            {{ $errors->first('database') }}
                                        @else
                                            Database is required.
                                        @endif
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="w-25"><label for="Name" class="col-form-label">Name *</label></td>
                                <td>
                                    <input type="text" name="name" class="col-6 form-control{{ ($errors->has('name')) ? ' is-invalid':'' }}" id="Name" placeholder="Name" value="{{ old('name', $table->name) }}" required>
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
                                <td><label for="description" class="col-form-label">Description</label></td>
                                <td>
                                    <textarea name="description" class="col-6 form-control" id="description" placeholder="Description">{{ old('description', $table->description) }}</textarea>
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
