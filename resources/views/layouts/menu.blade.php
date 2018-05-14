<div class="sticky-top">
    <div class="container-fluid nav-top" id="navTop">
        <nav class="navbar navbar-expand-lg main-navbar">
            <div class="btn-rooms ml-2">
                Personal Shopper
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link nav-profile menu-top{{ ((Request::segment(1) == "dashboard") OR (Request::segment(1) == "home")) ? ' active':'' }}"
                            href="{{ route('home') }}" onclick="clickMenu('dashboard');" data-key="dashboard">
                            <div class="icon-profile"></div> Dashboard
                        </a>
                    </li>
                    @role('administrator')
                    <li class="nav-item">
                        <a class="nav-link nav-location menu-top{{ (Request::segment(1) == "administration") ? ' active':'' }}"
                            href="#" onclick="clickMenu('administration');return false;" data-key="administration">
                            <div class="icon-location"></div> Administration
                        </a>
                    </li>
                    @endrole
                    <li class="nav-item">
                        <a class="nav-link nav-masterdata menu-top{{ (Request::segment(1) == "masterdata") ? ' active':'' }}" href="#" onclick="clickMenu('masterdata');return false;" data-key="masterdata">
                            <div class="icon-masterdata"></div> Master Data
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <!-- Workstation Submenu -->
    <div class="container-fluid nav-middle{{ ((Request::segment(1) == '') || (Request::segment(1) == 'home')) ? ' d-none':'' }}" id="navMiddle">
        <nav class="navbar navbar-expand-lg main-navbar menu-dropdown{{ (Request::segment(1) != "administration") ? ' d-none':'' }}" data-pair="administration">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link menu-middle{{ (Request::segment(2) == "users") ? ' active':'' }}" href="#" onclick="clickSubmenu('manage_users');return false;" data-clicked="false" data-key="manage_users">User Management</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-middle{{ (Request::segment(2) == "databases") ? ' active':'' }}" href="#" onclick="clickSubmenu('manage_databases');return false;" data-clicked="false" data-key="manage_databases">Database Management</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container-fluid nav-bottom{{ (Request::segment(2) == '') ? ' d-none':'' }}" id="navBottom">
            {{-- User Submenu --}}
            <nav class="navbar navbar-expand-lg main-navbar submenu-dropdown{{ (Request::segment(2) != "users") ? ' d-none':'' }}" data-pair="manage_users">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "users") && (Request::segment(3) == "create")) ? ' active':'' }}" href="{{ route('users.create') }}">Create User</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "users") && (Request::segment(3) == "manage")) ? ' active':'' }}" href="{{ route('users.manage') }}">Manage Users</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "users") && (Request::segment(3) == "lists")) ? ' active':'' }}" href="{{ route('users.list') }}">List Users</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg main-navbar submenu-dropdown{{ (Request::segment(2) != "databases") ? ' d-none':'' }}" data-pair="manage_databases">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "databases") && (Request::segment(3) == "create")) ? ' active':'' }}" href="#">Assign Database</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "databases") && (Request::segment(3) == "manage")) ? ' active':'' }}" href="#">Manage Databases</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "databases") && (Request::segment(3) == "lists")) ? ' active':'' }}" href="#">List Databases</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link{{ ((Request::segment(2) == "databases") && (Request::segment(3) == "user")) ? ' active':'' }}" href="#">User Databases</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- Master Data Dropdown -->
        <div id="containerMasterDataDropdown">
        </div>
    </div>
</div>
