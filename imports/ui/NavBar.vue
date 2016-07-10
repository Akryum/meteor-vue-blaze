<template>
  <div class="navBar">
      <div class="ui grid">
  <!--  <div class="computer tablet only row"> -->
    <div class="ui inverted fixed menu navbar page grid">
  <!--    <a href="" class="brand item">Garlic</a> -->
      <a href="/" class="item">Garlic</a>
      <a href="/auction" class="item">Auction</a>
      <a href="/corporate/list" class="item">Corporate</a>
  <!--    <a>{{> loginButtons}}</a>
      {{#if currentUser}}
      <a href="/profile">User profile</a>
      {{/if}} -->
  </div>

  <div class="ui grid">
    <div class="computer tablet only row">
      <div class="ui inverted fixed menu navbar page grid">
        <a href="" class="brand item">Project Name</a>
        <a href="" class="active item">Home</a>
        <a href="" class="item">About</a>
        <a href="" class="item">Contact</a>
        <div class="right menu">
          <a href="" class="item">Fixed top</a>
        </div>
      </div>
    </div>
    <div class="mobile only row">
        <div class="ui fixed inverted navbar menu">
            <a href="" class="brand item">Project Name</a>
            <div class="right menu open">
                <a href="" class="menu item">
                    <i class="content icon"></i> Click me
                </a>
            </div>
        </div>
        <div class="ui vertical navbar menu">
          <a href="" class="active item">Home</a>
          <a href="" class="item">About</a>
          <a href="" class="item">Contact</a>
          <div class="menu">
            <a href="" class="active item">Default</a>
            <a href="" class="item">Static top</a>
            <a href="" class="item">Fixed top</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {$} from 'meteor/jquery';

export default {
  ready: function() {
    $('.right.menu.open').on("click",function(e){
      e.preventDefault();
      console.log("Clicked!");
      //$('.ui.vertical.menu').toggle();
    });
    //$('.ui.dropdown').dropdown();
  }
}
</script>
