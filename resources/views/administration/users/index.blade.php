@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">User Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Manage Users</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col search-box">
                <form method="GET" class="form-inline col-12 justify-content-end">
                    <label for="filterBy">Search :</label>&nbsp;
                    <div class="form-group">
                        <select name="filter" class="custom-select" id="filterBy">
                            <option value="">Filter by</option>
                            <option value="fullname"{{ (Request::query('filter') == "fullname") ? ' selected':'' }}>Fullname</option>
                            <option value="email"{{ (Request::query('filter') == "email") ? ' selected':'' }}>Email</option>
                        </select>
                    </div>
                    <div class="form-group mx-sm-0 col-4">
                        <input type="search" name="keyword" class="form-control col-12" id="inputKeyword" placeholder="Keyword" value="{{ Request::query('keyword') }}">
                    </div>
                    <button type="submit" class="btn btn-dark">Search</button>
                </form>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="10" scope="col">
                                <div class="form-row">
                                    <label class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" aria-label="..." id="checkAll">
                                        <label class="custom-control-label" for="checkAll"></label>
                                    </label>
                                </div>
                            </th>
                            <th width="10" scope="col">No</th>
                            <th scope="col">Fullname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Created At</th>
                            <th width="200" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($users AS $user)
                            <tr onclick="toggleChecked('{{ $user->id }}')">
                                <th>
                                    <div class="form-row">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" aria-label="..." id="checkedValues{{ $user->id }}">
                                            <label class="custom-control-label" for="checkedValues{{ $user->id }}"></label>
                                        </label>
                                    </div>
                                </th>
                                <th scope="row" class="text-center">{{ $loop->iteration + $offset }}</th>
                                <td>{{ $user->fullname }}</td>
                                <td>{{ $user->email }}</td>
                                <td align="center">{{ $user->created_at->formatLocalized('%e %h %Y, %I:%M %p') }}</td>
                                <td class="text-center">
                                    <a href="{{ route('users.edit', $user->id) }}" class="btn btn-success btn-sm"><i class="far fa-edit"></i></a>
                                    <button type="submit" name="delete_button" class="btn btn-danger btn-sm" onclick="confirmButton(event, '#formDelete{{ $user->id }}');"><i class="far fa-trash-alt"></i></a>
                                    <form method="POST" action="{{ route('users.destroy', $user->id) }}" id="formDelete{{ $user->id }}">
                                        {{ method_field('DELETE') }}
                                        {{ csrf_field() }}
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" align="center"><b>No Record Found!</b></td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>

                <nav>
                    {{ $users->links() }}
                </nav>
            </div>
        </div>
    </div>
@endsection
