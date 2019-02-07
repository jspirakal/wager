<template>
     <b-navbar toggleable="md" type="dark" variant="dark" sticky="true">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">Home</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>

     <b-nav-item href="#" disabled>Players</b-nav-item>
     <b-nav-item href="#" disabled>Clubs</b-nav-item>
     <b-nav-item href="#" disabled>Managers</b-nav-item>
     <b-nav-item href="#" disabled>Coaches</b-nav-item>
     <b-nav-item href="#" disabled>Sponsors</b-nav-item>
     <b-nav-item href="#" disabled>Analysers</b-nav-item>
     <b-nav-item href="#" disabled>Mentors</b-nav-item>
   
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
          <b-dropdown-item href="/#/inbox">Inbox</b-dropdown-item>
        <b-dropdown-item href="/#/account">Account</b-dropdown-item>
        <b-dropdown-item href="/profile#/portfolio">Profile</b-dropdown-item>
        <b-dropdown-item href="/#/logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</template>
<script>
export default {
  name: 'Navigation',
}

</script>
<style>
#navbar {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}