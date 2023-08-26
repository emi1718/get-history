document.getElementById('head').innerHTML = `

<nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Get History</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavDropdown">
    <ul class="navbar-nav  ms-auto me-5">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Regions
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="east.html">East</a></li>
          <li><a class="dropdown-item" href="west.html">West</a></li>
          <li><a class="dropdown-item" href="north.html">North</a></li>
          <li><a class="dropdown-item" href="south.html">South</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="7wonders.html">7 Wonders</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="gallery.html">Gallery</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="travel.html">Travel</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="contact_page/contact.html">Contact</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">FAQ <i class="fa fa-question-circle" aria-hidden="true"></i></a>
      </li>
    </ul>
  </div>
</div>
</nav>


`