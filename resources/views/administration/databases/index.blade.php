@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">Database Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Manage Databases</li>
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
                            <option value="name"{{ (Request::query('filter') == "name") ? ' selected':'' }}>Name</option>
                            <option value="host"{{ (Request::query('filter') == "host") ? ' selected':'' }}>Host</option>
                            <option value="port"{{ (Request::query('filter') == "port") ? ' selected':'' }}>Port</option>
                            <option value="username"{{ (Request::query('filter') == "username") ? ' selected':'' }}>Username</option>
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
                            <th class="align-middle">No</th>
                            <th class="align-middle">Name</th>
                            <th class="align-middle">Host</th>
                            <th class="align-middle">Port</th>
                            <th class="align-middle">Username</th>
                            <th class="align-middle">Created At</th>
                            <th class="align-middle">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($databases AS $database)
                            <tr onclick="toggleChecked('{{ $database->id }}')">
                                <th>
                                    <div class="form-row">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" aria-label="..." id="checkedValues{{ $database->id }}">
                                            <label class="custom-control-label" for="checkedValues{{ $database->id }}"></label>
                                        </label>
                                    </div>
                                </th>
                                <th align="center">{{ $loop->iteration + $offset }}</th>
                                <td align="center">{{ $database->name }}</td>
                                <td align="center">{{ $database->host }}</td>
                                <td align="center">{{ $database->port }}</td>
                                <td align="center">{{ $database->username }}</td>
                                <td align="center">{{ $database->created_at }}</td>
                                <td class="text-center">
                                    <a href="#" class="btn btn-success btn-sm"><i class="far fa-edit"></i></a>
                                    <button type="submit" name="delete_button" class="btn btn-danger btn-sm" onclick="confirmButton(event, '#formDelete{{ $database->id }}');"><i class="far fa-trash-alt"></i></a>
                                    <form method="POST" action="#" id="formDelete{{ $database->id }}">
                                        {{ method_field('DELETE') }}
                                        {{ csrf_field() }}
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="9" align="center"><b>No Record Found!</b></td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>

                <nav>
                    {{ $databases->links() }}
                </nav>
            </div>
        </div>
    </div>
@endsection


