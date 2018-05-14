<table class="table">
    <thead>
        <tr>
            <th colspan="2" class="text-left">{{ $title }}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="w-25"><label for="fullName" class="col-form-label">Full Name *</label></td>
            <td>
                <input type="text" name="fullname" class="col-6 form-control{{ ($errors->has('fullname')) ? ' is-invalid':'' }}" id="fullName" placeholder="Full Name" value="{{ old('fullname', @$fullname) }}" required>
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
                <input type="email" name="email" class="col-6 form-control{{ ($errors->has('email')) ? ' is-invalid':'' }}" id="email" placeholder="Email" value="{{ old('email', @$email) }}" required>
                <div class="invalid-feedback">
                    @if($errors->has('email'))
                        {{ $errors->first('email') }}
                    @else
                        Email is required.
                    @endif
                </div>
            </td>
        </tr>
        @if(!empty($email))
            <tr>
                <td><label for="currentPassword" class="col-form-label">Current Password *</label></td>
                <td>
                    <input type="password" name="current_password" class="col-6 form-control{{ ($errors->has('current_password')) ? ' is-invalid':'' }}" id="currentPassword" placeholder="Current Password" required>
                    <div class="invalid-feedback">
                        @if($errors->has('current_password'))
                            {{ $errors->first('current_password') }}
                        @else
                            Current Password is required.
                        @endif
                    </div>
                </td>
            </tr>
        @endif
        <tr>
            <td><label for="password" class="col-form-label">Password *</label></td>
            <td>
                <input type="password" name="password" class="col-6 form-control{{ ($errors->has('password')) ? ' is-invalid':'' }}" id="password" placeholder="Password" required>
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
            <td><label for="confirmPassword" class="col-form-label">Confirm Password *</label></td>
            <td>
                <input type="password" name="password_confirmation" class="col-6 form-control" id="confirmPassword" placeholder="Confirm Password" required>
            </td>
        </tr>
        <tr>
            <td><label for="function" class="col-form-label">Role *</label></td>
            <td>
                <select name="role" class="col-3 custom-select{{ $errors->has('role') ? ' is-invalid':'' }}" required onchange="selectRole(this.value);">
                    <option value="">Select Role</option>
                    @foreach($roles AS $role)
                        <option value="{{ $role->id }}"{{ Library::compareOption(old('role', @$role_id), $role->id) }}>{{ $role->display_name }}</option>
                    @endforeach
                </select>
                <div class="invalid-feedback">
                    @if($errors->has('role'))
                        {{ $errors->first('role') }}
                    @else
                        Role is required.
                    @endif
                </div>
            </td>
        </tr>
        <tr class="border-bottom">
            <th></th>
            <th><button type="submit" class="btn btn-primary">{{ $button_label }}</button></th>
        </tr>
    </tbody>
</table>

@section('scripts')
    <script>
        function selectRole(val){
            if(val == 3){
                $('#storeContainer').removeClass('d-none');
                $('#storeOption').attr('required', true);
            }else{
                $('#storeContainer').addClass('d-none');
                $('#storeOption').attr('required', false);
            }
        }
    </script>
@endsection
