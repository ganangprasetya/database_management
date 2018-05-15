@extends('layouts.app')

@section('content')
<div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Master Data</a></li>
                        <li class="breadcrumb-item"><a href="#">Message MT</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Lists</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col search-box">
                <div class="row">
                    <div class="col-3">
                        <div class="form-group">
                            <form method="POST" action="{{ route('messagemt.changedb') }}">
                                {{ csrf_field() }}
                                @if(Auth::user()->hasRole('administrator'))
                                    <select class="col-6" name="database_id">
                                        <option value="">Select Database..</option>
                                        @forelse($databases as $database)
                                            @if($data == NULL)
                                                <option value="{{ $database->id }}">{{ $database->name }}</option>
                                            @else
                                                <option value="{{ $database->id }}" {{ Library::compareOption($database->id, old('database_id', $data->database_id)) }}>{{ $database->name }}</option>
                                            @endif
                                        @empty
                                        @endforelse
                                    </select>
                                @else
                                    <select class="col-6" name="database_id">
                                        <option value="">Select Database..</option>
                                        @forelse($user_databases as $user_database)
                                            @if($data == NULL)
                                                <option value="{{ $user_database->database_id }}">{{ $user_database->database->name }}</option>
                                            @else
                                                <option value="{{ $user_database->database_id }}" {{ Library::compareOption($user_database->database_id, old('database_id', $data->database_id)) }}>{{ $user_database->database->name }}</option>
                                            @endif
                                        @empty
                                        @endforelse
                                    </select>
                                @endif
                                <button type="submit" class="btn btn-sm btn-dark">Set</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-9">
                        <form method="GET" class="form-inline col-12 justify-content-end">
                            <label for="filterBy">Search :</label>&nbsp;
                            <div class="form-group">
                                <select name="filter" class="custom-select" id="filterBy">
                                    <option value="">Filter by</option>
                                    <option value="phone_number"{{ (Request::query('filter') == "phone_number") ? ' selected':'' }}>Phone Number</option>
                                    <option value="message_id"{{ (Request::query('filter') == "message_id") ? ' selected':'' }}>Message ID</option>
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
                <table class="table" style="display: block;overflow-x: auto;white-space: nowrap;">
                    <thead>
                        <tr>
                            <th scope="col">Count ID</th>
                            <th scope="col">Message ID</th>
                            <th scope="col">Original</th>
                            <th scope="col">Send To</th>
                            <th scope="col">Message</th>
                            <th scope="col">Receive Date</th>
                            <th scope="col">Sent Date</th>
                            <th scope="col">Sent Status</th>
                            <th scope="col">Delivered Date</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Delivered Status</th>
                            <th scope="col">Status</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Third ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if($messagesmt == NULL)
                            <tr>
                                <td colspan="15" align="center"><b>No Record Found!</b></td>
                            </tr>
                        @else
                            @forelse($messagesmt as $messagemt)
                                <tr onclick="toggleChecked('{{ $messagemt->countid }}')">
                                    <td class="align-middle">{{ $messagemt->countid }}</td>
                                    <td class="align-middle">{{ $messagemt->messageid }}</td>
                                    <td class="align-middle">{{ $messagemt->original }}</td>
                                    <td class="align-middle">{{ $messagemt->sendto }}</td>
                                    <td class="align-middle">{{ $messagemt->message }}</td>
                                    <td class="align-middle">{{ $messagemt->receivedate }}</td>
                                    <td class="align-middle">{{ $messagemt->sentdate }}</td>
                                    <td class="align-middle">{{ (!$messagemt->sentstatus) ? '-':$messagemt->sentstatus }}</td>
                                    <td class="align-middle">{{  (!$messagemt->delivereddate) ? '-':$messagemt->delivereddate }}</td>
                                    <td class="align-middle">{{ (!$messagemt->startdate) ? '-':$messagemt->startdate }}</td>
                                    <td class="align-middle">{{ (!$messagemt->enddate) ? '-':$messagemt->enddate }}</td>
                                    <td class="align-middle">{{ (!$messagemt->deliveredstatus) ? '-':$messagemt->deliveredstatus }}</td>
                                    <td class="align-middle">{{ $messagemt->status }}</td>
                                    <td class="align-middle">{{ $messagemt->priority }}</td>
                                    <td class="align-middle">{{ $messagemt->thirdid }}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="15" align="center"><b>No Record Found!</b></td>
                                </tr>
                            @endforelse
                        @endif
                    </tbody>
                </table>
                <nav>
                    {{ $messagesmt->links() }}
                </nav>
                @if(Request::query('filter') == "phone_number" AND Request::query('keyword') != NULL)
                    <hr>
                    <div class="card text-white" style="margin-top:10px; margin-left:15px; width: 100%;">
                        <div class="card-header" style="background-color:#757677;">
                            <h5 align="center">Form Email</h5>
                        </div>
                        <div class="card-body" style="color:black;">
                            <p>We checked below messages already successfully submitted to {{ $name_prefix }}.</br>
                            We'll check with {{ $name_prefix }} and revert you soon.</p>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th align="center">userid</th>
                                        <th align="center">messageid</th>
                                        <th align="center">original</th>
                                        <th align="center">sendto</th>
                                        <th align="center">receivedate</th>
                                        <th align="center">sentdate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if($messagesmt == NULL)
                                        <tr>
                                            <td colspan="15" align="center"><b>No Record Found!</b></td>
                                        </tr>
                                    @else
                                        @forelse($messagesmt as $messagemt)
                                                <td align="center">Tes</td>
                                                <td align="center">{{ $messagemt->messageid }}</td>
                                                <td align="center">{{ $messagemt->original }}</td>
                                                <td align="center">{{ $messagemt->sendto }}</td>
                                                <td align="center">{{ $messagemt->receivedate }}</td>
                                                <td align="center">{{ $messagemt->sentdate }}</td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="6" align="center"><b>No Record Found!</b></td>
                                            </tr>
                                        @endforelse
                                    @endif
                                </tbody>
                            </table>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection