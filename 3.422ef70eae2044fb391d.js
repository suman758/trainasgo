(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{izMe:function(n,t,e){"use strict";e.r(t),e.d(t,"startFocusVisible",function(){return c});var o="ion-focused",s="ion-focusable",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];function c(){var n=document,t=[],e=!0;function c(n){t.forEach(function(n){return n.classList.remove(o)}),n.forEach(function(n){return n.classList.add(o)}),t=n}n.addEventListener("keydown",function(n){(e=i.includes(n.key))||c([])});var r=function(){e=!1,c([])};n.addEventListener("focusin",function(n){e&&n.composedPath&&c(n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains(s)}))}),n.addEventListener("focusout",function(){n.activeElement===n.body&&c([])}),n.addEventListener("touchstart",r),n.addEventListener("mousedown",r)}}}]);