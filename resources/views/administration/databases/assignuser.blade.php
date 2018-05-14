@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Administration</a></li>
                        <li class="breadcrumb-item"><a href="#">Database Management</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Assign Database</li>
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
                            <option value="user"{{ (Request::query('filter') == "user") ? ' selected':'' }}>User</option>
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
                            <th class="align-middle">User</th>
                            <th class="align-middle">Email</th>
                            <th class="align-middle">Created At</th>
                            <th class="align-middle">Action</th>
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
                                <th align="center">{{ $loop->iteration + $offset }}</th>
                                <td align="center">{{ $user->fullname }}</td>
                                <td align="center">{{ $user->email }}</td>
                                <td align="center">{{ $user->created_at }}</td>
                                <td class="text-center">
                                    <a href="{{ route('databases.assignform', $user->id) }}" class="btn btn-info btn-sm">Assign Database</a>
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
                    {{ $users->links() }}
                </nav>
            </div>
        </div>
    </div>
@endsection
