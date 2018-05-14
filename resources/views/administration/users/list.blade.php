@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">User Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">List Users</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col search-box">
                <div class="row">
                    <div class="col-1">
                        <a href="{{ route('users.xls') }}" class="btn btn-success">Export to <i class="fa fa-file-excel" aria-hidden="true"></i></a>
                    </div>
                    <div class="col-11">
                        <form method="GET" class="form-inline col-12 justify-content-end">
                            <label for="filterBy">Search :</label>&nbsp;
                            <div class="form-group">
                                <select name="filter" class="custom-select" id="filterBy">
                                    <option value="">Filter by</option>
                                    <option value="fullname"{{ (Request::query('filter') == "fullname") ? ' selected':'' }}>Fullname</option>
                                    <option value="email"{{ (Request::query('filter') == "email") ? ' selected':'' }}>Email</option>
                                    <option value="role"{{ (Request::query('filter') == "role") ? ' selected':'' }}>Role</option>
                                </select>
                            </div>
                            <div class="form-group mx-sm-0 col-4">
                                <input type="search" name="keyword" class="form-control col-12" id="inputKeyword" placeholder="Keyword" value="{{ Request::query('keyword') }}">
                            </div>
                            <button type="submit" class="btn btn-dark">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th width="10" scope="col">No</th>
                            <th scope="col">Fullname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col" width="300">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($users AS $user)
                            <tr onclick="toggleChecked('{{ $user->id }}')">
                                <th scope="row" class="text-center">{{ $loop->iteration }}</th>
                                <td>{{ $user->fullname }}</td>
                                <td>{{ $user->email }}</td>
                                <td class="text-center">{{ $user->roles[0]->display_name }}
                                <td align="center">{{ $user->created_at->formatLocalized('%e %h %Y, %I:%M %p') }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" align="center"><b>No Record Found!</b></td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection


