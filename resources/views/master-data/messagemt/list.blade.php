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
                        @if($table_selected != NULL)
                        <li class="breadcrumb-item active" aria-current="page">{{ $table_selected->description }}</li>
                        @endif
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col search-box">
                <div class="row">
                    <div class="col-2">
                            <form method="POST" action="{{ route('messagemt.changedb') }}">
                                {{ csrf_field() }}
                                @role('administrator')
                                <div class="form-group">
                                    <select class="custom-select" name="database_id" id="database_id">
                                        <option value="">Select Database..</option>
                                        @forelse($databases as $database)
                                            @if($data == NULL)
                                                <option value="{{ $database->id }}">{{ $database->name }}</option>
                                            @else
                                                <option value="{{ $database->id }}" {{ Library::compareOption($database->id, old('database_id', $data->database_id)) }}>{{ $database->name }}</option>
                                            @endif
                                        @empty
                                        @endforelse
                                    </select></br>
                                    <div class="table_id">
                                        <select class="custom-select" name="table_id" id="table_id" placeholder="Select Table.."></select>
                                    </div>
                                </div>
                                @endrole
                                @role('super_user')
                                <div class="form-group">
                                    <select class="custom-select" name="database_id" id="database_id">
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
                                    <div class="table_id">
                                        <select class="custom-select" name="table_id" id="table_id" placeholder="Select Table.."></select>
                                    </div>
                                </div>
                                @endrole
                                <button type="submit" class="btn btn-dark">Set</button>
                            </form>
                    </div>
                    <div class="col-10">
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
                @if($messagesmt == NULL)
                @else
                <table class="table" style="display: block;overflow-x: auto;white-space: nowrap;">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
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
                        @forelse($messagesmt as $messagemt)
                            @php
                                $receivedate = date_create($messagemt->receivedate);
                                $sentdate = date_create($messagemt->sentdate);
                            @endphp
                            <tr>
                                <th scope="row" class="text-center">{{ $loop->iteration }}</th>
                                <td class="align-middle">{{ $messagemt->countid }}</td>
                                <td class="align-middle">{{ $messagemt->messageid }}</td>
                                <td class="align-middle">{{ $messagemt->original }}</td>
                                <td class="align-middle">{{ $messagemt->sendto }}</td>
                                <td class="align-middle">{{ $messagemt->message }}</td>
                                <td class="align-middle">{{ date_format($receivedate, 'd-m-Y H:i:s') }}</td>
                                <td class="align-middle">{{ date_format($sentdate, 'd-m-Y H:i:s') }}</td>
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
                    </tbody>
                </table>
                @endif
                @if($messagesmt != NULL)
                    <nav>
                        {{ $messagesmt->links() }}
                    </nav>
                @endif
                @if(Request::query('filter') == "phone_number" AND Request::query('keyword') != NULL)
                    <hr>
                    <div class="card text-white" style="margin-top:10px; margin-left:15px; width: 100%;">
                        <div class="card-header" style="background-color:#757677;">
                            <h5 align="center">Form Email</h5>
                        </div>
                        <div class="card-body" style="color:black;">
                            <p>We checked below messages already successfully submitted to {{ $name_prefix }}.</br>
                            We'll check with {{ $name_prefix }} and revert you soon.</p></br>
                            <table>
                                <thead>
                                    <tr>
                                        <th>userid</th>
                                        <th>messageid</th>
                                        <th>original</th>
                                        <th>sendto</th>
                                        <th>receivedate</th>
                                        <th>sentdate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if($messagesmt == NULL)
                                        <tr>
                                            <td colspan="15" align="center"><b>No Record Found!</b></td>
                                        </tr>
                                    @else
                                        @forelse($messagesmt as $messagemt)
                                            @php
                                                $receivedate = date_create($messagemt->receivedate);
                                                $sentdate = date_create($messagemt->sentdate);
                                            @endphp
                                            <tr>
                                                <td>Tes</td>
                                                <td>{{ $messagemt->messageid }}</td>
                                                <td>{{ $messagemt->original }}</td>
                                                <td>{{ $messagemt->sendto }}</td>
                                                <td>{{ date_format($receivedate, 'd-m-Y H:i:s') }}</td>
                                                <td>{{ date_format($sentdate, 'd-m-Y H:i:s')  }}</td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td colspan="6" align="center"><b>No Record Found!</b></td>
                                            </tr>
                                        @endforelse
                                    @endif
                                </tbody>
                            </table>
                            <p><b>GMT+7</b></p>
                            <p>Thanks.</p>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        $(document).ready(function(){
            $('.table_id').hide();
            $('#database_id').on('change', function(e){
              $('.table_id').show();
              var database_id = e.target.value;
              console.log(database_id);

              //ajax
              $.ajax({
                url : 'changedatabases/tablelists?database_id=' + database_id,
                type : "GET",
                dataType : "JSON",
                success : function(data){
                  // alert('bisa!!!');
                  $('#table_id').empty();
                  // alert(data);
                  $.each(data, function(index, table){
                    $('#table_id').append('<option value="'+table.id+'">'+table.name+' - '+table.description+'</option>');
                    // alert(kecamatan);
                  });
                },
                error : function(){
                  alert('Belum bisa!!!');
                }
              });
            });
          });
    </script>
@endsection