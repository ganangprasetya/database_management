<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

use App\StoreUser;
use Library;

class CheckUserid implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $check_userid = StoreUser::where('phone_number', Library::cekUserid($value))->count();
        if($check_userid > 0)
        {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Phone number is not available, try with another else.';
    }
}
