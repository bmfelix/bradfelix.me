@extends('structure.main')
@section('content')

<div class="container-fluid main-container col-12 float-left">
    <div id="root" data-token={{ csrf_token() }} class="float-left row col-12 no-padding-margin fullHeight"></div>
</div>

@endsection
