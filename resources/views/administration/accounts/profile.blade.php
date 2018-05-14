@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col">
          <form method="POST" action="{{ route('update') }}" class="needs-validation" enctype="multipart/form-data" novalidate>
                {{ csrf_field() }}
                {{ method_field('PUT') }}
                <table class="table">
                    <thead>
                        <tr>
                            <th colspan="2" class="text-left">Edit Profile {{ $accounts->fullname }}</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td class="w-25"><label for="fullName" class="col-form-label">Full Name *</label></td>
                          <td>
                              <input type="text" name="fullname" class="col-6 form-control{{ ($errors->has('fullname')) ? ' is-invalid':'' }}" id="fullName" placeholder="Full Name" value="{{ old('fullname', $accounts->fullname) }}" required>
                              <div class="invalid-feedback">
                                  @if($errors->has('fullname'))
                                      {{ $errors->first('fullname') }}
                                  @else
                                      Full Name is required.
                                  @endif
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td><label for="email" class="col-form-label">Email *</label></td>
                          <td>
                              <input type="email" name="email" class="col-6 form-control{{ ($errors->has('email')) ? ' is-invalid':'' }}" id="email" placeholder="Email" value="{{ old('email', $accounts->email) }}" required>
                              <div class="invalid-feedback">
                                  @if($errors->has('email'))
                                      {{ $errors->first('email') }}
                                  @else
                                      Email is required.
                                  @endif
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td><label for="currentPassword" class="col-form-label">Current Password</label></td>
                          <td>
                              <input type="password" name="current_password" class="col-6 form-control{{ ($errors->has('current_password')) ? ' is-invalid':'' }}" id="currentPassword" placeholder="Current Password">
                              <div class="invalid-feedback">
                                  @if($errors->has('current_password'))
                                      {{ $errors->first('current_password') }}
                                  @else
                                      Current Password is required.
                                  @endif
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td><label for="password" class="col-form-label">New Password</label></td>
                          <td>
                              <input type="password" name="password" class="col-6 form-control{{ ($errors->has('password')) ? ' is-invalid':'' }}" id="password" placeholder="New Password">
                              <div class="invalid-feedback">
                                  @if($errors->has('password'))
                                      {{ $errors->first('password') }}
                                  @else
                                      Password is required.
                                  @endif
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td><label for="confirmPassword" class="col-form-label">Confirm Password</label></td>
                          <td>
                              <input type="password" name="password_confirmation" class="col-6 form-control" id="confirmPassword" placeholder="Confirm Password">
                              <div class="invalid-feedback">
                                  @if($errors->has('confirmPassword'))
                                      {{ $errors->first('confirmPassword') }}
                                  @else
                                      Confirm Password is required.
                                  @endif
                              </div>
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
