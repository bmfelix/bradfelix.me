<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="Brad Felix" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Primary Meta Tags -->
    <title>Brad Felix</title>
    <meta name="title" content="Brad Felix">
    <meta name="description" content="The Official Website of Me (Brad Felix)">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://bradfelix.me/">
    <meta property="og:title" content="Brad Felix">
    <meta property="og:description" content="The Official Website of Me (Brad Felix)">
    <meta property="og:image" content="https://bradfelix.me/images/brad.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://bradfelix.me/">
    <meta property="twitter:title" content="Brad Felix">
    <meta property="twitter:description" content="The Official Website of Me (Brad Felix)">
    <meta property="twitter:image" content="https://bradfelix.me/images/brad.png">
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
    <!-- Addtional Styles -->
    @yield('stylesheets')

    <script defer src="/js/all.min.js"></script>
</head>
